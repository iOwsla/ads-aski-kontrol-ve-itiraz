import data from "../../data.js";
import LoggerUtils from "../../../../utils/logger.utils.js";
import {ConsoleLogStatus} from "../../../../utils/enum.utils.js";
import Stepper from "../index.stepper.js";

class $Step2 extends Stepper {
  constructor(page,options) {
    super(options);
    this.page = page;
  }

  async run() {
    return new Promise(async (resolve,reject) => {
      await super.run(this.page);
      const elementText = await this.page.$$eval("span",(elements) => elements.map(y => y.innerText.trim()));
      if (!elementText) {
        LoggerUtils.sendLog("[Step #2] Google giriş sayfası açılamadı!", ConsoleLogStatus.DANGER);
        reject(false);
      } else {
        if (elementText.includes(data.LOGIN_SELECTORS.LOGIN)) {
          // CAPTCHA => id="playCaptchaButton"
          // do something...
          resolve(true);
        } else {
          LoggerUtils.sendLog("[Step #2] Giriş seçeneği bulunamadı!", ConsoleLogStatus.DANGER);
          reject(false);
        }
      }
    })
  }
}

export default $Step2;
