var fs  = require('fs');
function getStat(fileName, callback){
    fs.stat(fileName, function(err,data){
        if(err){
            callback(err);
        }
        else{
            callback(null,data);
        }
    })
}
// function handleStat(err,data){
    
// }
getStat("README.md",(err,data)=>{
    if(err){
        console.error("Error occured while reading file ", err)
    }
    else{
        console.log(data);
    }
})