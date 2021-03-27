//To work with file system on your computer, include the File System Module (fs) using require.
let fs=require("fs");

//To work with directories and file paths, include the Path Module (path) using require.  
let path=require("path");


let xlsx=require("xlsx");


function createExcelFile(teamName,batsmanName,batsmanStats){

    let filePath = path.join(__dirname,"IPL 2020", teamName, batsmanName + ".xlsx");

    let fileExist = checkExistence(filePath);
    let playerEntries = [];
    if (fileExist) {
        let JSONdata = excelReader(filePath, batsmanName);
        playerEntries = JSONdata;
        playerEntries.push(batsmanStats);
        excelWriter(filePath, playerEntries, batsmanName);
    } else {
        playerEntries.push(batsmanStats);
        excelWriter(filePath, playerEntries, batsmanName);
    }
}
function checkExistence(filePath) {
    return fs.existsSync(filePath);
}

function excelReader(filePath, batsmanName) {
    if (fs.existsSync(filePath)==false) {
        return null;
    } else {
        let content = xlsx.readFile(filePath);
        let excelData = content.Sheets[batsmanName];
        let data = xlsx.utils.sheet_to_json(excelData);
        return data;
    }
}

function excelWriter(filePath, json, batsmanName) {
    let workbook = xlsx.utils.book_new();
    let newWorkBook = xlsx.utils.json_to_sheet(json);
    xlsx.utils.book_append_sheet(workbook, newWorkBook, batsmanName);  
    xlsx.writeFile(workbook, filePath);
}


// It is used to export functions from one module
module.exports = {
    createExcelFileFn:createExcelFile
}