//To work with directories and file paths, include the Path Module (path) using require.  
let path=require("path");

//To extract data from an html page, include Cheerio Module (cheerio) using require.
let cheerio=require("cheerio");

//Importing the module to include functions defined in another file.
let { createJSONFileFn } = require("./createJSONFile");
let { createExcelFileFn } = require("./createExcelFile");



function storeDetailsInObject(teamName,batsmanName,html,teamNamesArr){
    let pathOfFile=path.join(__dirname,"IPL 2020",teamName,batsmanName+".json");
    let selTool=cheerio.load(html);
    let venueDate=selTool(".match-info.match-info-MATCH .description").text();
    let venueDateArr=venueDate.split(",");
    let venue=venueDateArr[1];
    let date=venueDateArr[2];

    
    let opponent_name=selTool(teamNamesArr[0]).text();
    if(opponent_name==teamName){
        opponent_name=selTool(teamNamesArr[1]).text();
    }


    let result=selTool(".match-info.match-info-MATCH .status-text span").text();
    let batsmanTable=selTool(".Collapsible__contentInner .table.batsman");
    for(let j=0;j<batsmanTable.length;j++){
        let batsmanNameArr=selTool(batsmanTable[j]).find("tbody tr");
        for(let k=0;k<batsmanNameArr.length;k++){
            let batsmanNameCheck=selTool(batsmanNameArr[k]).find("a").text();
            if(batsmanNameCheck==batsmanName){

                let column=selTool(batsmanNameArr[k]).find("td");

                let batsmanStats={

                    "runs":selTool(column[2]).text(),
                    "balls":selTool(column[3]).text(),
                    "fours":selTool(column[5]).text(),
                    "sixes":selTool(column[6]).text(),
                    "sr":selTool(column[7]).text(),
                    "date":date,
                    "venue":venue,
                    "result":result,
                    "opponentName":opponent_name

                };

                //Create JSON File 
                createJSONFileFn(pathOfFile,batsmanStats);  
                //Create Excel File
                createExcelFileFn(teamName,batsmanName,batsmanStats);

                
            }

            
            
}
    }
}



// It is used to export functions from one module
module.exports={
    storeDetailsInObjectFn:storeDetailsInObject
}