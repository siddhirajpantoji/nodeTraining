var app = require('express')();
app.use("/",require('./router'))
module.exports = app;