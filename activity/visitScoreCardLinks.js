//To make https calls, include Request Module (request) using require.
let request=require("request");

//Importing the module to include functions defined in another file.
let { extractTeamNamesFn } = require("./extractTeamNames");

function visitScoreCardLinks(mainFolderName,scoreCardLinkArr,count){
    if (count == scoreCardLinkArr.length) {
        return;
    }
    request(scoreCardLinkArr[count],cb3);

    function cb3(err, resp, html) {
        if (err) {
            console.log(err);
        } else {
            extractTeamNamesFn(mainFolderName,html);
            visitScoreCardLinks(mainFolderName,scoreCardLinkArr, count + 1);
        }
    }
}



// It is used to export functions from one module
module.exports={
    visitScoreCardLinksFn:visitScoreCardLinks
}