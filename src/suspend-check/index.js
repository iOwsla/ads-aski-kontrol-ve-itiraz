import puppeteer from "puppeteer-core";
import DolphinCreator from "../dolphin.js";
import DataBase from "../Database.js";


import {suspendCheckRetry} from "./function.js";
import LoggerUtils from "../../utils/logger.utils.js";


import Config from "../../config/config.js";
import data from "./data.js";
import {ConsoleLogStatus} from "../../utils/enum.utils.js";

import StepRunner from "./Stepper/step.runner.js";
import Stepper from "./Stepper/index.stepper.js";
import {$Step1, $Step2, $Step3} from "./Stepper/Steps/index.js";

class SuspendChecker {
  constructor(PROXY, MISSION_ID, THREADS) {
    this.PROXY = PROXY;
    this.MISSION_ID = MISSION_ID;
    this.THREADS = THREADS;
  };

  async connectToBrowser(browserValue) {
    try {
      const browser = await puppeteer.connect({
        browserWSEndpoint: `ws://127.0.0.1:${browserValue.port}${browserValue.wsEndpoint}`
      });
      return browser;
    } catch (e) {
      LoggerUtils.sendLog("[Suspend Checker] Unable to connect to browser", ConsoleLogStatus.DANGER, e.message);
      throw e;
    }
  }

  async startBrowser() {
    try {
      await DolphinCreator.cleanupBrowserData(`${this.MISSION_ID}`);
      const DolphinApi = new DolphinCreator(this.PROXY, this.MISSION_ID, this.THREADS, {cookie: false, data: []});
      let createBrowserApi = await DolphinApi.createBrowser();
      let startBrowserApi = Object.keys(DataBase.get(`${this.MISSION_ID}`)).map(dataBase => ({browserId: dataBase, ...DataBase.get(`${this.MISSION_ID}.${dataBase}`)}));
      for (let i = 0; i < startBrowserApi.length; i++) {
        const browserValue = startBrowserApi[i];
        console.log(browserValue);
        const browser = await this.connectToBrowser(browserValue);
        browser.on("disconnected", () => {
          DataBase.delete(`${this.MISSION_ID}.${browserValue.browserId}`);
          LoggerUtils.sendLog("[Suspend Checker] Tarayıcı bağlantısı kesildiği için yeniden çalıştırıldı.",ConsoleLogStatus.INFO);
          this.startBrowser();
        });
        const [firstPage] = await browser.pages();
        await firstPage.setViewport({width: 1920, height: 1080});
        await firstPage.waitForTimeout(5000);

        try {
          await firstPage.goto(data.GO_URL, {
            waitUntil: ["domcontentloaded", "networkidle0"],
            timeout: 70000
          });
          if (createBrowserApi?.cookie?.length > 0 || data.COOKIE.length > 0) {
            LoggerUtils.sendLog("[Suspend Checker] Cookie'ler başarıyla yüklendi.",ConsoleLogStatus.SUCCESS);
            await firstPage.setCookie(...data.COOKIE[i]);
          }
          try {
            const runner = new StepRunner([new $Step1(firstPage), new $Step2(firstPage), new $Step3(firstPage)]);
            const e = await runner.run(firstPage, this.MISSION_ID);
            console.log(e);
            await suspendCheckRetry(firstPage, this.MISSION_ID);
          } catch (e) {
            await DolphinCreator.cleanupBrowserData(this.MISSION_ID);
            LoggerUtils.sendLog("[Suspend Checker] Suspension status could not be displayed!", ConsoleLogStatus.DANGER, e.message);
          }
        } catch (e) {
          LoggerUtils.sendLog("Hata:", ConsoleLogStatus.DANGER, e.message);
          await DolphinCreator.cleanupBrowserData(this.MISSION_ID); // Check active browsers, delete the passive ones.
          await DolphinCreator.cleanBrowser(this.MISSION_ID, browserValue.browserId.toString(), browser);
        }
      }
    } catch (e) {
      console.log(e)
      if (e.message.toString().includes("connect ECONNREFUSED")) {
        this.startBrowser();
      }
    }
  }

}

export default SuspendChecker;
