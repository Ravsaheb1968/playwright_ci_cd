import{expect} from "@playwright/test";

import {test} from "../testfixtures/fixtures.js";

import {getExcelData} from "../utilities/exceldata.js";

import path from "path";

const filePath = path.resolve("testdata/Playwright_Data.xlsx");

const testData = getExcelData(filePath, "Users");

test("Demoshop Login Page", async({loginPage})=>{

    await loginPage.navigate();
    await loginPage.login(testData[0].Email, testData[0].Password);
})
