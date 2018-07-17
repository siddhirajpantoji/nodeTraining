const db = require('../daoLayer/db');
const empDao = require('../daoLayer/employeeDao');

/**
 * Creates connection to DB 
 * @param {*} callback 
 */
function getDbConnection(callback) {
    mongoose.connect(configs.mongoDBURL, (err) => {
        if (err) {
            callback(err);
        }
        else {
            callback();
            console.log('connected to mongodb');
        }
    });
}
/**
 * Close DB Connection 
 */
function closeDBConnection() {
    db.closeDBConnection().then(data=>{
        console.log("closed Connection Successfully")
    }).catch(err=>{
        console.error("Unable to Close ",err)
    })
    // mongoose.connection.close((err => {
    //     if (err) {
    //         console.error("Unable to close Connection ", err)
    //     }
    //     else {
    //         console.log("Closed Connection Successfully ");
    //     }
    // }))
}

function createEmployee(employeeObj, callback) 
{
    db.openDBConnection().then(data=>{
        empDao.createEmployee(employeeObj).then(emp1=>{
            closeDBConnection();
            callback(null,emp1);
        }).catch(err=>{
            closeDBConnection();
            callback(err);
        })
    }).catch(err=>{
        callback(err)
    })

    // getDbConnection(function (err) {
    //     if (err) {
    //         return callback(err);
    //     }
    //     var employees = new Array();
    //     var emp1 = new Employee(employeeObj);
    //     employees.push(emp1);
        
    //     Employee.create(employees, function (err, res) {
    //         CommonFunction(err, res, callback);
    //     });
    // });
}

function getAllEmployee(callback) {

    db.openDBConnection().then(data=>{
        empDao.getAllEmployees().then(data=>{
            callback(null,data);
        }).catch(err1=>{
            callback(err);
        })
    }).catch(err=>{
        callback(err)
    })
    //var employees = new Array();
    //employees.push(employeeObj);
    // getDbConnection((err) => {
    //     if (err) {
    //         return callback(err);
    //     }
    //     Employee.find({}, function (err, employees) {
    //         if (err) {
    //             return callback(err, null)
    //         }
    //         else {
    //             var userMap = {};

    //             employees.forEach(function (employee) {
    //                 userMap[employee._id] = employee;
    //             });
    //             closeDBConnection();
    //             callback(null, employees);
    //         }
    //     });
    // })

}

function updateEmployee(employeeObj, callback) {
    var id = employeeObj.id
    if (!id) {
        callback("Id is Required ")
    }
    getDbConnection((err => {
        if (err) {
            return callback(err);
        }
        Employee.findByIdAndUpdate({ _id: id }, employeeObj, { new: true }, (err, data) => {
            CommonFunction(err, data, callback);
        });
    }));
}

function deleteEmployee(employeeObj, callback) {
    var id = employeeObj.id
    getDbConnection((err) => {
        if (err) {
            return callback(err);
        }
        Employee.remove({ _id: id }, function (err, data) {
            CommonFunction(err, data, callback)
        });
    })

}

var CommonFunction = function (err, data, callback) {
    closeDBConnection();
    if (err) {
        callback(err, null);
    }
    else {
        callback(null, data);
    }
}

module.exports = { createEmployee, getAllEmployee, updateEmployee, deleteEmployee }