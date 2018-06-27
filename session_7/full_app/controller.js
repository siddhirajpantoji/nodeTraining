// Basic Routing 
const service = require('./service.js');
function getFunction(req,res){
    service.getAllEmployees(function(err,data){
        if(err){
            res.writeHead(500, 'Internal server error!', { 'Content-type': 'application/json' });
            res.write(JSON.stringify({err }));
            res.end();
           // res.send(err)
        }
        else{
            res.writeHead(200, '', { 'Content-type': 'application/json' });
            res.write(JSON.stringify({data }));
            res.end();
            //res.send(data);
        }
    })
    // var name = req.query.name;
    // var result = service.getResp(name);
    // result.then(data=>{
    //     res.send(data);
    // }).catch(err=>{
    //     res.send(err);
    // })
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


function deleteResponse(req, res){
    var firstName = req.body.firstName;

    if(!firstName){
        res.writeHead(400, 'Bad Request!', { 'Content-type': 'application/json' });
        res.write("First Name Missing ");
        res.end();
    }
    else{
        service.deleteEmployee(firstName, function(err,data){
            if(err){
                res.writeHead(500, 'Internal server error!', { 'Content-type': 'application/json' });
                res.write(JSON.stringify({err }));
                res.end();
               // res.send(err)
            }
            else{
                res.writeHead(200, '', { 'Content-type': 'application/json' });
                res.write(JSON.stringify({data }));
                res.end();
                //res.send(data);
            }
        });
    }
  }

module.exports = {getFunction,postResponse, deleteResponse};