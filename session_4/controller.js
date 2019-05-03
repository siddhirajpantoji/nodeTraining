const service = require('./service')
var getDate = (req,res)=>{
    service.getDate((err,data)=>{
        if(err){
            console.error(err);
            res.status(err.status).json(err);
        }
        else{
            res.status(data.status).json(data);
        }
    })
}
module.exports = {
    getDate
}