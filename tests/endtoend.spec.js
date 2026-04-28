import { test } from "../testfixtures/fixtures.js";
import path from "path";
import { getExcelData } from "../utilities/exceldata.js";

import { expect } from "@playwright/test";

const filePath = path.resolve("testdata/Playwright_Data.xlsx");

const testData = getExcelData(filePath, "Users");

test.describe.parallel("End to flow Login to Remove Cart ", ()=>{
    
    testData.forEach(user =>{
        test(`Login to Add to Cart ${user.Email} ` , async({page,loginPage,registerPage,logoutPage,addressPage,addCart })=>{
            await registerPage.navigate();
            // await registerPage.RegisterUser(user.Gender,user.FirstName, user.LastName, user.Email, user.Password, user.ConfirmPassword);
            // await logoutPage.LogoutApplication();
            await loginPage.login(user.Email, user.Password);
            await addressPage.UserAddress(user.FirstName, user.LastName, user.Email, user.Company, user.Country,user.City, user.Address1, user.Address2,user.ZipPostalCode,user.PhoneNumber,user.FaxNumber);
            await addCart.AddToCart();
        })
    })
})