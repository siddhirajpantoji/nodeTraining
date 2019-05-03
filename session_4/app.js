var express = require('express');
var app = express();
var routes = require('./router')
app.use(require('body-parser').json());
app.use("/",routes);
app.listen(3000);