/**
 * This class will take care of DB Connection opening an closing successfully 
 */
const mongoose = require('mongoose')

const configs = require('../config/config')
/**
 * this will return a promise that will open DB Connection 
 */
function openDBConnection(){
    return new Promise((resolve,reject)=>{
        mongoose.connect(configs.mongoDBURL, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    })
}

function closeDBConnection(){
    return new Promise(function(resolve,reject){
        mongoose.connection.close((err)=>{
            if(err){
                reject(err)
            }
            resolve("Connection Closed Successfully");
        })
    });
}
module.exports = {
    openDBConnection,closeDBConnection
}