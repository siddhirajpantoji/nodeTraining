var process = require('process');
const os = require('os')
const fs = require('fs')
var noOfRows = parseInt(process.argv[2]);
console.log("No of Rows = "+noOfRows);

var data = "";
for( i=0 ; i < noOfRows ; i++ ){
    for( j=0 ; j <= i ; j++ ){
        data+="#"
    }
    data+= " Hello"+os.EOL;
}
console.log(data);

fs.writeFile("Patter1.md", data , (err)=>{
    if(err){
        console.log("Error While writing file ", err)
    }
    else{
        console.log("File Written Successfuly ")
    }
})