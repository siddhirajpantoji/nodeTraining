const express = require('express')
var router = express.Router()
const contoller = require('./controller');
// middleware that is specific to this router

// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })
router.get('/',contoller.getFunction);

router.post('/',contoller.postResponse);

router.delete('/',contoller.deleteResponse);

module.exports = router;