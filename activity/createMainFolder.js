//To work with file system on your computer, include the File System Module (fs) using require.
let fs=require("fs");

//To work with directories and file paths, include the Path Module (path) using require.  
let path=require("path");



function createMainFolder(folderName){
    //Creating a valid path
    dirPath=path.join(__dirname,folderName);
    //Checking whether the path exists or not, if it does not exists create a directory.
    if(fs.existsSync(dirPath)==false){
        fs.mkdirSync(dirPath);
    }
}

// It is used to export functions from one module
module.exports={
    createMainFolderFn:createMainFolder
}