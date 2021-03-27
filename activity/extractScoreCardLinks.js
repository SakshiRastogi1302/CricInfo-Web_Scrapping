//To extract data from an html page, include Cheerio Module (cheerio) using require.
let cheerio=require("cheerio");

//Importing the module to include functions defined in another file.
let { visitScoreCardLinksFn } = require("./visitScoreCardLinks");



function extractScoreCardLinks(mainFolderName,html){
    let selTool=cheerio.load(html);
    let scoreArr=selTool(".match-cta-container a");
    let scoreCardLinkArr=[];
    for(let i=2;i<scoreArr.length;i+=4){
        let scoreArrLink=selTool(scoreArr[i]).attr("href");
        scoreCardLinkArr.push("https://www.espncricinfo.com"+scoreArrLink);
        

    }

    visitScoreCardLinksFn(mainFolderName,scoreCardLinkArr,0);

}


// It is used to export functions from one module
module.exports={
    extractScoreCardLinksFn:extractScoreCardLinks
}