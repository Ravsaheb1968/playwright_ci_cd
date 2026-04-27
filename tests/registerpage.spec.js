import { RegisterPage } from "../pages/registerpage.js";
import { test } from "../testfixtures/fixtures.js";

import { getExcelData } from "../utilities/exceldata.js";

import path from 'path';

const filePath = path.resolve("testdata/Playwright_Data.xlsx");

const testData = getExcelData(filePath, "Users");

test.describe.parallel("Register User", async () => {

    testData.forEach(user => {
        test(`Register the User ${user.Email}`, async ({ page, registerPage }) => {

            await registerPage.navigate();
            console.log("The name of the user is " + user.Email);
            await registerPage.RegisterUser(user.Gender,user.FirstName, user.LastName, user.Email, user.Password, user.ConfirmPassword);
             
        })
    })

})


