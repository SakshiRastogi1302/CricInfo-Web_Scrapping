//To work with file system on your computer, include the File System Module (fs) using require.
let fs=require("fs");

//To work with directories and file paths, include the Path Module (path) using require.  
let path=require("path");

//To make https calls, include Request Module (request) using require.
let request=require("request");

//To extract data from an html page, include Cheerio Module (cheerio) using require.
let cheerio=require("cheerio");


//Importing the module to include functions defined in another file.
let { extractMatchResultLinkFn } = require("./extractMatchResultLink");
let { createMainFolderFn } = require("./createMainFolder");
let { extractScoreCardLinksFn } = require("./extractScoreCardLinks");



//Scrapping data using the given link of IPL 2020-2021 home page.
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";

//Create a main folder named IPL 2020.
let mainFolderName="IPL 2020";
createMainFolderFn(mainFolderName);

//Make a call to given url.
request(url,cb1);

//Callback Function 1
function cb1(error,response,html){
    if(error){
        console.log(error);
    }
    else{
        let matchResultLink=extractMatchResultLinkFn(html);
        request(matchResultLink,cb2);
    }
}

//Callback Function 2
function cb2(error,response,html){
    if(error){
        console.log(error);
    }
    else{
        let scoreCardLinkArr=extractScoreCardLinksFn(mainFolderName,html);
    }
}