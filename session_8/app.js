const express = require('express');
const employeeRouter = require('./routes/EmployeeRoute');
const bodyParser = require('body-parser');

app = new express();
app.use(bodyParser.json());

app.use('/employee',employeeRouter);

