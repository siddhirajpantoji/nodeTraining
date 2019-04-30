var fs = require('./node_modules/fs');
console.log("Before  File read")
function callbackFunction (err,data){
    if(err){
        console.error(err);
    }
    else{
        console.log(data);
    }
}
fs.readFile("normalFile1.txt","UTF-8", callbackFunction);
console.log("After File read")