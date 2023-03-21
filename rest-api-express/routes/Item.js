const express = require('express');
const router = express.Router();
let ItemController = require('../controllers/ItemController')
let validator = require('../service/ValidationService')
const Utils = require('../utils/Utils')
/**This is for all get Items */
router.get("/",validator.validate,ItemController.getAll)

router.all("*",Utils.handleUndeclaredMethods)

module.exports = router