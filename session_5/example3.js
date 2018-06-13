// Routers
const express = require('express');
const routes = require('./router');
const bodyParser = require('body-parser')

app = new express();
app.use(bodyParser.json());
//console.log(app);
app.use('/',routes);

app.listen(4000);