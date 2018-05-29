// Read and  Write From File using FS 
const fs = require("fs");
//const primeNumber = require("./support/primenumber");
// Create file folder in sesson_3 directory 
fs.appendFile("./file/TestFile.txt", "This is a test file", function(err){
    if(err){
        console.log(err);
    }
    else{
        fs.readFile("./file/TestFile.txt","UTF-8", function(err, data){
            if (err){
                console.error("This is error while File Reading", err);
            }else{
                console.log(data);
            }
        })
    }
});


