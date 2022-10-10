// Util package , Log and Print 
const util = require("util");
const fs = require('fs')

var name = "Nate";
var money = 33;
console.log(util.format("%s has %d dollars", name, money));
let readFileFromLocal = util.promisify(fs.readFile)
readFileFromLocal("./file/TestFile.txt", "utf-8").then(data=>{
    console.log("Data Inside promise ")
    console.log(data)
}).catch(err=>{
    console.log("inside Error ", err)
})