import { RegisterPage } from "../pages/registerpage.js";
import {test} from "../testfixtures/fixtures.js";

import { getExcelData } from "../utilities/exceldata.js";

import path from 'path';

const filePath = path.resolve("testdata/Playwright_Data.xlsx");

const testData = getExcelData(filePath, "Data");

test("Register the User", async({registerPage})=>{
    registerPage.RegisterPage(testData[0].Email, testData[0].Password,testData[0].ConfirmPassword, testData[0].Firstname,testData[0].Lastname,testData[0].Gender);
})