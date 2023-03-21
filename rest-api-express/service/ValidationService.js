
class ValidationService{

    validate(req, res, next){
        console.log("Inside validate Method ")
        next()
    }
}
module.exports = new ValidationService()