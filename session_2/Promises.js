// // Futher verision of callback.
// //var fs = 
// Order {orderid , ajkdhasd/asdmadasdasd}
// OrderHistory {orderID, lastUdpated, status }
// List of Orders in which an array of ORder histpry has to be der 
// [{
//  Order :{.... history :[]   }
// },{
//     Order :{.... history :[]   }
//    },{
//     Order :{.... history :[]   }
//    },{
//     Order :{.... history :[]   }
//    }{
//  Order :{.... history :[]   }
// }]

// Select * from orders , ()=>{
//     number of orders 
//     //loop (Sleect * from order_history where order_id = 1,)
//     Promise.all()
// }


fs = require('fs');
function apendFile(filename, text) {
    fs.readFile(filename,"UTF-8", (err,data)=>{
        if(err){
            console.error("Unable to read file ")
        }
        else{
            console.log("File Contents "+data);
            data = data+ text;
            fs.writeFile(filename,data, (err)=>{
                if(err){
                    console.log("Unable to write ", err);
                }
                else{
                    console.log("Data Updated ")
                }
            })
        }
    })
}
function readFile(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,"UTF-8", (err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data);
            }
        })
    })
}
function appendPromise(fileName, text ){
    readFile(fileName).then(data=>{
        console.log(data)
        data += text;
        writeFile(fileName,data);
    }).catch(err=>{
        console.log(err);
    })
}
function writeFile(path, content ){
    return new Promise((resolve,reject)=>{
        fs.writeFile(path,content,(err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve();
            }
        })
    })
}
apendFile("avengers.txt","I am thanoss");
appendPromise("avengers.txt","I am thanoss");
