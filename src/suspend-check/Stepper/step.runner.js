import DolphinCreator from "../../dolphin.js";

class StepRunner {
  constructor(steps) {
    this.steps = steps;
  }

  async run(page, missionId) {
    for (const step of this.steps) {
      let success = false;
      while (!success) {
        try {
          await step.run(page);
          success = true;
        } catch (e) {
          await DolphinCreator.cleanupBrowserData(missionId);
          console.log("[StepRunner] Step failed to execute, retrying...");
        }
      }
    }
  }
}

export default StepRunner;
