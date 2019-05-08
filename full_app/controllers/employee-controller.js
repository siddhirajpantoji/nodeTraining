const service = require('../service/employee')
function createEmployee(req,res){
    service.createEmployee((err,data)=>{
        if(err){
            res.status(err.status).json(err)
        }
        else{
            res.status(data.status).json(data);
        }
    })
}
var insertEmployee =(req,res)=>{
    console.log("Insert Employee start ");
    var data = {
        name: req.body.name,
        age: parseInt(req.body.age)
    }
    service.insertStudent(data,(err,sucess)=>{
        if(err){
            res.status(err.status).json(err)
        }
        else{
            res.status(sucess.status).json(sucess);
        }
    })
}
module.exports = { createEmployee ,insertEmployee}