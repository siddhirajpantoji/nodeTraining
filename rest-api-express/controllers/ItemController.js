
class ItemController {

    getAll(req, res, next) {
        console.log("Inside get all ")
        res.status(200).json({
            "data": [
                {
                    "name": "Bhupesh"
                }
            ]
        })
    }

}
module.exports = new ItemController()