const db = require('./db');
const queries = require('./queries');

var createEmployee = (callback)=>{
    db.query(queries.EMPLOYEE.CREATE,(err,data)=>{
        if(err){
            console.log("Error F ",err.stack)
            callback(err)
        }
        else{
            console.log("Data "+data)
            callback(null,data);
        }
    })
}
var saveEmployee = (data, callback) =>{
    db.query(queries.EMPLOYEE.INSERT,[data.name,data.age], (err,data)=>{
        if(err){
            console.error("Error While Insert Query ",err)
            callback(err)
        }
        else{
            console.log(data.rows);
            callback( null, data.rows[0]);
        }
    })
}
module.exports= {
    createEmployee, saveEmployee
}