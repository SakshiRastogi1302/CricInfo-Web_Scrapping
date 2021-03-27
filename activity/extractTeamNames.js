//To extract data from an html page, include Cheerio Module (cheerio) using require.
let cheerio=require("cheerio");

//Importing the module to include functions defined in another file.
let { createTeamFolderFn } = require("./createTeamsFolder");
let { storeDetailsInObjectFn } = require("./storeDetailsInObject");


function extractTeamNames(mainFolderName,html){
    let selTool=cheerio.load(html);
    let teamNames=selTool(".match-info.match-info-MATCH .name");
    for(let i=0;i<teamNames.length;i++){
        let name=selTool(teamNames[i]).text();
        createTeamFolderFn(mainFolderName,name);
    }

    let batsmanTable=selTool(".Collapsible__contentInner .table.batsman");
    for(let j=0;j<batsmanTable.length;j++){
    
        let names=selTool(teamNames[j]).text();
        let batsmanNameArr=selTool(batsmanTable[j]).find("tbody tr a");
        for(let k=0;k<batsmanNameArr.length;k++){
            let batsmanName=selTool(batsmanNameArr[k]).text();
            
            storeDetailsInObjectFn(names,batsmanName,html,teamNames);
        }
        
    }

}

// It is used to export functions from one module
module.exports={
    extractTeamNamesFn:extractTeamNames
}