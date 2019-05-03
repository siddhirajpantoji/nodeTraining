const dao = require('./dao')
var getDate = (callback)=>{
    dao.getDate((err,data)=>{
        result = undefined;
        if(err){
            result = {
                status: 500,
                err:err
            }
            callback(result)
        }
        else{
            result = {
                status:200, 
                data: data
            }
            callback( null, result);
        }
    });
}
module.exports = {
    getDate
}