
function executeQuery(query, callback){
    executeQuery(query,(err,data)=>{
        callback(err,data)
    })
}

function execute(){
    let query = "Select * From orders limit 0,10"
    let result = []
    executeQuery(query,(err,data)=>{
        if(err){

        }
        else{
            for(let rowCount = 0 ; rowCount<data.length ; rowCount++){
                let order = data[rowCount]
                let innerQuery = "Select * from order_status where orderId = "+order.id
                executeQuery(innerQuery,()=>{
                    
                })
            }
        }
    })
}