var express = require('express');
var app = express();

app.get('/getResponse',(req, res) => {
    res.contentType("applicaiton/json");
    res.send("{message:'this is test message'}")
}).listen(4000);