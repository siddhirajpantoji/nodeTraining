service = require('./service')
module.exports.endpoint = (event, context , callback)=>{
    service.getTime((err,data)=>{
        console.log(data);
        var response = {
            statusCode:200,
            body:JSON.stringify({time:data})
        }
        callback( null,response);
    })
}