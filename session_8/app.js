const express = require('express');
const employeeRouter = require('./routes/EmployeeRoute');
const bodyParser = require('body-parser');
const utils = require('./utils/utils')

const configs = require('./config/config');
app = new express();
app.use(bodyParser.json());

app.use('/employee',employeeRouter);

app.use((req, res, next) => {
    console.error("Resource Not Found")
    const error = new Error('Resource not found!');
    error.status = 404;
    utils.Error400(req, res, error);
    next(error);
})


app.use((error, req, res, next) => {

    console.error("Exception occured in Global ", error)
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
    utils.Error500(req, res, error);
})
app.listen(4000);