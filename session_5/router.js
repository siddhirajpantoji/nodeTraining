const express = require('express')
var router = express.Router()
// middleware that is specific to this router

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
router.get('/',function(req,res){
    res.send("Get Reponse")
});

router.post('/',function(req,res){
    res.send("Post Reponse ");
});

module.exports = router;