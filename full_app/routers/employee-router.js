var express = require('express');
var router = express.Router();
var controller = require('../controllers/employee-controller')
router.route("/create").get(controller.createEmployee);
router.route("/").post(controller.insertEmployee);
module.exports= router;