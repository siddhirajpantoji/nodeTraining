// Static Files 

var express = require('express');
var app = express();
// Create public folder 
app.use('/', express.static('public')); // 
app.listen(3000); //the port you want to use