// This is the main express file with whole module code 
var express = require('express');
var path = require('path')
var body_parser = require('body-parser');

var app = express();
//app.use(body_parser.text())
//This is used for parsing request object . This is also an middleware 

// Static Dir Usage 
//app.use("/static",express.static(path.join(__dirname,path.sep,"public")));
//app.use(express.static(__dirname));
// app.get("/", (req,res)=>{
//     res.status(200).json({time:new Date()})
// })
// This is an auth Middleware 
app.use((req,res,next)=>{
    var token = req.headers.token;
    if(token){
        next()
    }
    else{
        res.status(401).json({reason:"Not Auth"})
    }
})
app.use(body_parser.json())
app.post("/",(req,res)=>{
    //console.log(req);
    var name = req.body.name;
    console.log(name);
    res.status(200).json({name:"Mr"+name});
})
app.listen(3000, (err)=>{
    if(err){
        console.log("Error while running server on port ",err)
    }else{
        console.log("Server started on 3000")
    }
});

