const dao = require('./dao')
var getDate = (callback)=>{
    
    dao.getDate((err,data)=>{
        if(err){
            callback({
                status: 500,
                err:err
            })
        }
        else{
            callback( null, {
                status:200, 
                data: data
            })
        }
    });
}
module.exports = {
    getDate
}