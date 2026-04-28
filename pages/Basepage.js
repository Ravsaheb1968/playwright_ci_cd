import { expect } from "@playwright/test";

export class Basepage {

    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto("https://demowebshop.tricentis.com/");
    }

    async getPageTitle() {
        return await this.page.getTitle();
    }

    async click(locator) {
        await locator.click();
    }

    async fill(locator, value) {
        await locator.fill(value);
    }

    // 👁 Wait for visibility
    async waitForVisible(locator) {
        await locator.waitFor({ state: 'visible' });
    }

    async getText(locator){
        return await locator.textContext();
    }

    async select(locator, value){
        await locator.selectOption(value);
    }
    async takeScreenshot(name = 'screenshot'){
        await this.page.screenshot({path:`screenshots/${name}.png`});
    }

}