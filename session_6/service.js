
function getResp(name){
    return new Promise(function(resolve,reject){
        var err = true;
        if(err){
            reject(err);
        }
        else{
            resolve("Hello "+name);
        }
    });
   // return callback(null, "Hello "+name);
}   

module.exports = {getResp}