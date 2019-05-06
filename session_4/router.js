const express = require('express');
var router = express.Router();
var controller = require('./controller')
function allhandler(req,res){
    res.status(501).json({"message":"Method Not implemented "})
}
router.route("/").get(controller.getDate).
    post(controller.getDate).
    patch(controller.getDate).delete(controller.getDate).all(allhandler);
module.exports = router;