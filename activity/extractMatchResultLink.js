//To extract data from an html page, include Cheerio Module (cheerio) using require.
let cheerio=require("cheerio");


function extractMatchResultLink(html){
    let selTool=cheerio.load(html);
    let extractMatchResultLink=selTool(".widget-items.cta-link a").attr("href");
    extractMatchResultFullLink="https://www.espncricinfo.com"+extractMatchResultLink;
    return extractMatchResultFullLink;
}


// It is used to export functions from one module
module.exports={
    extractMatchResultLinkFn:extractMatchResultLink
}