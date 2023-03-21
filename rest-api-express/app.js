const express = require('express')
const app = express()
const itemRouter= require('./routes/Item')

app.use("/item",itemRouter)

app.all("*", (req, res, next) => {
    
    let err = {
        "status":404,
        "message":"Resource Not found "
    }
    next(err)
})

/**
 * This is Global Error Handler
 */
app.use((err, req, res, next) => {
    if (!err.status) {
        err.status = 500
    }
    if (!err.message) {
        err.message = "Something went Wrong"
    }
    res.status(err.status).json({
        "message": err.message,
        "err":err
    })
})

app.listen(3000)