// This will Contain our express app code 
var express = require('express')
var app = express();
app.use(require('body-parser').json());
var loginRoutes = require('./routers/loginRouter');
var emplRoutes = require('./routers/employee-router')
app.use("/",loginRoutes);
app.use("/employee",emplRoutes);
module.exports = app;