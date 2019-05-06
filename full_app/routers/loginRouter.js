var express = require('express');
const loginValidator = require('../validators/loginValidator');
const loginController = require('../controllers/loginController');

var router = express.Router();
router.route("/login").post(loginValidator.loginValidator, loginController.loginController);
module.exports = router;