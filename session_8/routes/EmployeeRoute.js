const express = require('express')
var router = express.Router()
const controller = require('../controllers/EmployeeController')

router.get('/', controller.getAllEmployees);

router.post('/',controller.createEmployee);

router.put('/',controller.updateEmployee);

router.delete('/',controller.deleteEmployee);

module.exports = router