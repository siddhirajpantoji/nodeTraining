// This will Contain our express app code 
var express = require('express')
var app = express();
app.use(require('body-parser').json());
var loginRoutes = require('./routers/loginRouter');
app.use("/",loginRoutes);
module.exports = app;