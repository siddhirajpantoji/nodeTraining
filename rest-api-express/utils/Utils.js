
class Utils {

    handleUndeclaredMethods(req, res, next){
        let err = {
            "status":501,
            "message":"Method Not Implemented "
        }
        next(err)
    }
}
module.exports = new Utils()