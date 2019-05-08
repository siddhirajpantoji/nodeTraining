const employeeDao = require('../dao/employee');

var createEmployee =(callback)=>{
    employeeDao.createEmployee((err,data)=>{
        if(err){
            console.log("Inside Error Service",err)
            callback({
                status:500,
                err:err
            });
        }
        else{
            console.log("Inside Error Data ",data)
            callback(null,{
                status:200,
                message:"table created "
            } );
        }
    })
}
var insertStudent= (data, callback)=>{
    employeeDao.saveEmployee(data,(err,data)=>{
        if(err){
            callback({status:500,err:err})
        }else{
            callback(null, {
                status:200,
                data
            })
        }
    })
}
module.exports = {
    createEmployee , insertStudent
}