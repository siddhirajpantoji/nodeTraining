/**
 * This file will take care of All Employee CRUD Operations 
 */

const Employee = require('../models/Employee');

function getAllEmployees() {
    return new Promise((resolve, reject) => {
        Employee.find({}, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data);
            }
        })
    });
}

/**
 * This will create a Employee 
 * @param {*} employeeObj 
 */
function createEmployee(employeeObj) {
    return new Promise((resolve, reject) => {
        var employees = new Array();
        var emp1 = new Employee(employeeObj);
        employees.push(emp1);

        Employee.create(employees, function (err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    })
}

/**
 * Find an Employee by ID and update it 
 */
function updateEmployee() {
    return new Promise(function (resolve, reject) {
        var id = employeeObj.id
        if (!id) {
            reject("Id is Required ")
        }
        Employee.findByIdAndUpdate({ _id: id }, employeeObj, { new: true }, (err, data) => {
            if(err){
                reject(err);
            }
            else{
                resolve(data)
            }
        });
    });
}

/**
 * Delete Single Employee on basis of Employee Id 
 * @param {*} id 
 */
function deleteEmployee(id){
    
    return new Promise((resolve,reject)=>{
        if(!id){
            reject("ID is required")
        }
        Employee.remove({_id:id},(err,data)=>{
            if(err){
                reject(err)
            }
            resolve(data);
        })
    })
}

module.exports = {
    getAllEmployees,createEmployee,updateEmployee,deleteEmployee
}