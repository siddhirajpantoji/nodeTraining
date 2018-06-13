// Controller Model

function getFunction(req,res){
    res.send("Get Response ")   
}

function postResponse(req, res){
  //  console.log(req.body);
  //  var name = req.body.name;
   // console.log(name);
    res.send("Post Response ")
}

module.exports = {getFunction, postResponse}