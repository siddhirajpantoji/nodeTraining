const express = require('express');
var router = express.Router();
var controller = require('./controller')
router.route("/").get(controller.getDate);
module.exports = router;