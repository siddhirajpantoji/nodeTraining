require('./app').listen(3000,(err)=>{
    if(err){
        console.log("Unable to start on 3000 . Kuch to gadbad hai  ");
    }
    else{
        console.log("Server started on 3000")
    }
})