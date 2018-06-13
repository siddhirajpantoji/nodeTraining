const express = require('express')
var router = express.Router()
const contoller = require('./example4');
// middleware that is specific to this router

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
router.get('/',contoller.getFunction);

router.post('/',contoller.postResponse);

module.exports = router;