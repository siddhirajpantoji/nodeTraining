
var express = require('express');
var router = express.Router();
router.route("/").get(require('./controller').getDate);
module.exports = router;