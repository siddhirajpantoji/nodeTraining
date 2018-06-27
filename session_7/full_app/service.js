const daoLayer = require('./dao');


function getAllEmployees(callback){
    daoLayer.getAllEmployees(null,function(err,data){
        if(err){
            callback(err,null);
        }
        else{
            callback(null,data);
        }
    });
}

function deleteEmployee(name, callback){
    daoLayer.deleyeEmployee({firstName:name}, function(err,data){
        if(err){
            callback(err,null);
        }
        else{
            callback(null,data);
        }
    });
}
module.exports ={getAllEmployees , deleteEmployee}