import { AddressPage } from "../pages/addresspage.js";
import {AddToCart} from "../pages/addToCart.js";
import {LoginPage} from "../pages/loginpage.js";
import { LogoutApp } from "../pages/logoutapp.js";
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
    },
    logoutPage: async({page}, use)=>{
        const logoutpg = new LogoutApp(page);
        await use(logoutpg);
    },
    addressPage : async ({page}, use)=>{
        const addresspg = new AddressPage(page);
        await use(addresspg);
    },
    addCart : async({page},use)=>{
        const addCartpg = new AddToCart(page);
        await use(addCartpg);
    }
})