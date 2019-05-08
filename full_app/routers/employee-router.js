var express = require('express');
var router = express.Router();
var controller = require('../controllers/employee-controller')
var empValidators = require('../validators/employee-validator')
router.route("/create").get(controller.createEmployee);
router.route("/").post(empValidators.validations(),empValidators.employeeValidtion,controller.insertEmployee);
module.exports= router;