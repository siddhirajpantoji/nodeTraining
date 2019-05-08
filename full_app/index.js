// This will start our server on local 
require('dotenv').config();
var app = require('./app');
const PORT = process.env.PORT;
app.listen(PORT, (err)=>{
    if(err){
        console.log("Unable to start Server on Port"+PORT, err)
    }
    else{
        console.log("Server Started on port "+PORT)
    }
});