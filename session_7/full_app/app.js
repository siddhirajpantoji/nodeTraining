// Routers
const express = require('express');
const routes = require('./router');
const bodyParser = require('body-parser')

app = new express();
app.use(bodyParser.json());
//console.log(app);
app.use('/',routes);

app.use((req, res, next) => {
    logger.error("Resource Not Found")
    const error = new Error('Resource not found!');
    error.status = 404;
    utils.Error400(req, res, error);
    next(error);
})


app.use((error, req, res, next) => {

    logger.error("Exception occured in Global ", error)
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
    utils.Error500(req, res, error);
})
app.listen(4000);