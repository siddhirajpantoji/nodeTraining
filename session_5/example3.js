// Routers
const express = require('express');
const routes = require('./router');

app = new express();
app.use('/',routes);

app.listen(4000);