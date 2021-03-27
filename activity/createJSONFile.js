//To work with file system on your computer, include the File System Module (fs) using require.
let fs=require("fs");

//To work with directories and file paths, include the Path Module (path) using require.  
let path=require("path");

function createJSONFile(pt,obj){
    let arr;
    if(fs.existsSync(pt)==false)
       { 
           fs.openSync(pt,"w");
            arr=[];
            arr.push(obj);
       }
       else{
           content=fs.readFileSync(pt);
           arr=JSON.parse(content);
           arr.push(obj);
       }
    let contentinFile=JSON.stringify(arr);
    fs.writeFileSync(pt,contentinFile);
}


//Importing the module to include functions defined in another file.
module.exports={
    createJSONFileFn:createJSONFile
}