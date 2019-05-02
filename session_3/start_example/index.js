var express = require('express')
var app = express();

app.get("/",(req,res)=>{
    res.status(200).json({"time":new Date()});
});
app.listen(3000, (err)=>{
    if(err){
        console.log("Error aldjaskldas")
    }
    else{
        console.log("Server Started at 3000")
    }
})