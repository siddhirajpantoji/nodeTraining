// This will start our server on local 
var app = require('./app');
app.listen(3000, (err)=>{
    if(err){
        console.log("Unable to start Server on Port 3000")
    }
    else{
        console.log("Server Started on port 3000")
    }
});