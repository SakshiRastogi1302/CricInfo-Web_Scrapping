//To work with file system on your computer, include the File System Module (fs) using require.
let fs=require("fs");

//To work with directories and file paths, include the Path Module (path) using require.  
let path=require("path");


function createTeamFolder(mainFolderName,folderName){
    dirPath=path.join(__dirname,mainFolderName,folderName);
    if(fs.existsSync(dirPath)==false){
        fs.mkdirSync(dirPath);
    }
}


//Importing the module to include functions defined in another file.
module.exports={
    createTeamFolderFn:createTeamFolder
}