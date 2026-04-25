import xlsx from 'xlsx';


// when write function we need to use of the function keyword while normal function and export function
// when u write the function in between class that time u doesn't need to write the 
export function getExcelData(path, sheetname){

    const workbook = xlsx.readFile(path);
    const sheet = workbook.Sheets[sheetname];
    const data = xlsx.utils.sheet_to_json(sheet);
    return data;
    
}