const Employee = require('../models/Employee');
function createEmployee(employeeObj, callback) {
    var employees = new Array();
    var emp1 = new Employee(employeeObj);
    employees.push(emp1);
    Employee.create(employees, function (err, res) {
        CommonFunction(err,data,callback);
    });
}

function getAllEmployee(callback) {
    //var employees = new Array();
    //employees.push(employeeObj);
    Employee.find({}, function (err, employees) {
        if (err) {
            return callback(err, null)
        }
        else {
            var userMap = {};

            employees.forEach(function (employee) {
                userMap[user._id] = employee;
            });
            callback(null, employees);
        }
    });
}

function updateEmployee(employeeObj, callback) {
    var id = employeeObj.id
    Employee.findByIdAndUpdate(id, employeeObj, (err,data)=>{
        CommonFunction(err,data,callback);
    });
}

function deleteEmployee(employeeObj, callback) {
    var id = employeeObj.id
    Employee.remove({ _id: id }, function (err, data) {
        CommonFunction(err,data,callback)      
    });
}

var CommonFunction  = function(err,data,callback){
    if (err) {
        callback(err, null);
    }
    else {
        callback(null, data);
    }
}

module.exports ={ createEmployee, getAllEmployee, updateEmployee, deleteEmployee}