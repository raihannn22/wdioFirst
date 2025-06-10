import { driver } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    activityName

    constructor(activityName) {
        this.activityName = '.' + activityName
    }

    async isScreenActive(){
        await this.wait();
        return await driver.getCurrentActivity() === this.activityName
    }

    async wait(timeout = 5000, interval = 500) {
        await driver.waitUntil(
            async () => {
                const currentActivity = await driver.getCurrentActivity();
                return this.activityName === (currentActivity)},
            {
                timeout: timeout,
                interval: interval,
                timeoutMsg: `Activity ${this.activityName} not loaded after ${
                    timeout / 1000
                } seconds`,
            }
        );
    }


    async scrollIfNeeded(element) {
        if (!(await element.isDisplayed())) await element.scrollIntoView();
    }
}
