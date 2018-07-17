const Employee = require('../models/Employee');
const mongoose = require('mongoose');
const configs = require('../config/config');
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
    mongoose.connection.close((err => {
        if (err) {
            console.error("Unable to close Connection ", err)
        }
        else {
            console.log("Closed Connection Successfully ");
        }
    }))
}

function createEmployee(employeeObj, callback) 
{
    getDbConnection(function (err) {
        if (err) {
            return callback(err);
        }
        var employees = new Array();
        var emp1 = new Employee(employeeObj);
        employees.push(emp1);
        
        Employee.create(employees, function (err, res) {
            CommonFunction(err, res, callback);
        });
    });
}

function getAllEmployee(callback) {
    //var employees = new Array();
    //employees.push(employeeObj);
    getDbConnection((err) => {
        if (err) {
            return callback(err);
        }
        Employee.find({}, function (err, employees) {
            if (err) {
                return callback(err, null)
            }
            else {
                var userMap = {};

                employees.forEach(function (employee) {
                    userMap[employee._id] = employee;
                });
                closeDBConnection();
                callback(null, employees);
            }
        });
    })

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