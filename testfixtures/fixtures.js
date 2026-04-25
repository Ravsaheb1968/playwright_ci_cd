import {LoginPage} from "../pages/loginpage.js";

import {test as base} from "@playwright/test";

export const test = base.extend({
    loginPage: async ({page}, use)=>{
        const loginpg = new LoginPage(page);
        await use(loginpg);
    },
})