const messages = require('./messages')
function loginValidator( req,res, next ){
    // Checking if username exists or not 
    var username = req.body.username
    if( username ){
        if( username.trim().length >0 ){
            next();
        }
        else{
            res.status(400).json({message:messages.USERNAME_CANNOT_BE_EMPTY})    
        }
    }
    else{
        res.status(400).json({message:messages.USERNAME_REQUIRED})
    }
}
module.exports = {
    loginValidator
}