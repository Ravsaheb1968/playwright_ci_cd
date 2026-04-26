import {LoginPage} from "../pages/loginpage.js";
import {RegisterPage} from "../pages/registerpage.js";
import {test as base} from "@playwright/test";

export const test = base.extend({
    loginPage: async ({page}, use)=>{
        const loginpg = new LoginPage(page);
        await use(loginpg);
    },
    registerPage : async ({page}, use)=>{
        const registerpg = new RegisterPage(page);
        await use(registerpg);
    }
})