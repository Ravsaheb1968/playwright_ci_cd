import { RegisterPage } from "../pages/registerpage.js";
import { test } from "../testfixtures/fixtures.js";

import { getExcelData } from "../utilities/exceldata.js";

import path from 'path';

const filePath = path.resolve("testdata/Playwright_Data.xlsx");

const testData = getExcelData(filePath, "Users");


test.describe.parallel("Register User", async () => {

    testData.forEach(user => {
        let i = 0;
        test(`Register the User ${user.Email}`, async ({ page, registerPage }) => {

            let i = +1;
            await registerPage.navigate();
            console.log("The name of the user is " + testData[0].FirstName);
            await registerPage.RegisterUser(testData[0].Gender, testData[0].FirstName, testData[0].LastName, testData[0].Email, testData[0].Password, testData[0].ConfirmPassword);
            if (i == 10) {
                page.close();
                break;

            }
        })
    })

})


