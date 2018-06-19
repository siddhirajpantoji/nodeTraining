// Basic Routing 
const service = require('./service.js');
function getFunction(req,res){
    var name = req.query.name;
    var result = service.getResp(name);
    result.then(data=>{
        res.send(data);
    }).catch(err=>{
        res.send(err);
    })
    // service.getResp(name,function(err,data){
    //     res.send(data);
    // })
    //res.send("Get Response ")   
}

function postResponse(req, res){
  //  console.log(req.body);
  //  var name = req.body.name;
   // console.log(name);
    res.send("Post Response ")
}
module.exports = {getFunction,postResponse};