var {body, validationResult} = require('express-validator/check');
var validations = ()=>{
  return  [
        body('name').exists().withMessage("Name must exists").isLength({min:5}).withMessage("name must be 5 characters long "),
        body('age').exists().withMessage("Age is required ").isInt().withMessage("Age must be Integer ")
    ]
}

var employeeValidtion= (req,res,next) =>{
    var errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors.array());
    }else{
        next();
    }
}
module.exports = {
    validations, employeeValidtion
}