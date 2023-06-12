import data from "../../data.js";
import LoggerUtils from "../../../../utils/logger.utils.js";
import {ConsoleLogStatus} from "../../../../utils/enum.utils.js";
import Stepper from "../index.stepper.js";
import Step from "../../data.js";
import DolphinCreator from "../../../dolphin.js";

class $Step3 extends Stepper {
  constructor(page,options) {
    super(options);
    this.page = page;
  }

  async run() {
    return new Promise(async (resolve,reject) => {
      if (this.page) {
        await this.page.waitForSelector("span");
        const suspendCheck = await this.page.$$eval("span", elements => elements.map(element => element.innerText.trim()));
        if (suspendCheck.includes(Step.DATA)) {
          console.log("[Suspend Checker] Hesabınız askıya alındı.");
          resolve({status: true, message: "[Suspend Checker] Hesabınız askıya alındı."});
        } else {
          console.log("[Suspend Checker] Hesabınız askısız.");
          resolve({status: false, message: "[Suspend Checker] Hesabınız askıda değil."});
        }
      } else {
        await DolphinCreator.cleanupBrowserData(missionId);
        resolve({status: false, message: "[Suspend Checker] this.page element'ini bulamadım."});
      }
    });
  }
}

export default $Step3;
