import{expect} from "@playwright/test";

import {test} from "../testfixtures/fixtures.js";

import {getExcelData} from "../utilities/exceldata.js";

const testData = getExcelData("D:/PlaywrightData.xlsx","Data");

test("Demoshop Login Page", async({loginPage})=>{

    await loginPage.navigate();
    await loginPage.login(testData[0].Email, testData[0].Password);
})
