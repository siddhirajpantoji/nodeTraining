const utils = require('../utils/utils')
const employeeService = require('../service/EmployeeService')
function createEmployee(req, res) {
    var employee = {
        name: req.body.name,
        address: req.body.address,
        position: req.body.position,
        salary: req.body.salary,
    }
    employeeService.createEmployee(employee, function (err, data) {
        commonFunction(err,data);
    })
}


function updateEmployee(req, res) {
    var employee = {
        id:req.body.id,
        name: req.body.name,
        address: req.body.address,
        position: req.body.position,
        salary: req.body.salary,
    }
    employeeService.updateEmployee(employee, function (err, data) {
        commonFunction(err,data);
    })
}

function getAllEmployees(req, res) {
    // var employee = {
    //     id:req.body.id,
    //     name: req.body.name,
    //     address: req.body.address,
    //     position: req.body.position,
    //     salary: req.body.salary,
    // }
    employeeService.getAllEmployee(function (err, data) {
        commonFunction(err,data);
    })
}

function deleteEmployee(req, res) {
    var employee = {
        id:req.body.id,
        name: req.body.name,
        address: req.body.address,
        position: req.body.position,
        salary: req.body.salary,
    }
    employeeService.deleteEmployee(employee, function (err, data) {
        commonFunction(err,data);
    })
}
var commonFunction = function (err, data) {
    if (err) {
        utils.Error500(req, res, err);
    } else {
        utils.SuccessfulPostData(req, res, data);
    }
}


module.exports = {
    createEmployee, deleteEmployee, getAllEmployees, updateEmployee
}