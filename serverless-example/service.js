function getTime(callback){
    setTimeout(()=>{
        callback( null,new Date());
    },1000)
}
module.exports = {
    getTime
}