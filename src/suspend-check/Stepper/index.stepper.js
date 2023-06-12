class Stepper {
  constructor(options = {
    waitTime: 1000,
    reloadPage: true,
    waitElement: true,
    waitForXpath: "",
    waitXpath: false,
    waitForSelector: "",
    waitSelector: false
  }) {
    this.options = options;
  }

  async run(page) {
    if (this.options.waitTime > 0) await page.waitForTimeout(this.options.waitTime);
    if (this.options.waitSelector && this.options.waitForSelector) await page.waitForSelector(this.options.waitForSelector);
    if (this.options.waitXpath && this.options.waitForXpath) await page.waitForXPath(this.options.waitForXpath);
    if (this.options.waitElement) await page.waitForTimeout(this.waitTime);
    if (this.options.reloadPage) await page.reload();
  }
}

export default Stepper;
