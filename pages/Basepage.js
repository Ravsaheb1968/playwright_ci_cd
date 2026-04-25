import {expect} from "@playwright/test";

export class Basepage{

    constructor(page){
        this.page=page;
    }

    async navigate(){
        await this.page.goto("https://demowebshop.tricentis.com/");
    }
    
    async click(locator){
        await this.click(locator);
    }

    async fill(locator, value){
        await this.fill(locator, value);
    }

    async verifyloginSuccessfull(){
        await expect(this.page).toHaveURL("/account");
    }
}