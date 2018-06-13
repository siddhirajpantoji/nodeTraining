// Static Files 

var express = require('express');
var app = express();
// Create public folder 
app.use('/', express.static(__dirname));
app.use('/files', express.static('files')); // 
app.listen(3000); //the port you want to use