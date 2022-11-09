const fs = require('fs')
async function readFile(filePath, options){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,options,(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

async function writeFile(pathToWrite, dataToWrite){
    return new Promise((resolve,reject)=>{
        fs.writeFile(pathToWrite,dataToWrite,(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

async function execute(){
    try {
        let data = await readFile("file/TestFile.txt", "utf-8")
        console.log(data)
        data = data+"are not that awesome"
        await writeFile("file/TestFile.txt",data)
        let finalData = await readFile("file/TestFile.txt", "utf-8")
        console.log(finalData)
    } catch (error) {
        console.log(error)
    }
    // readFile("file/TestFile.txt", "utf-8").then(data=>{
    //     console.log(data)
    // }).catch(err=>{
    //     console.log(err)
    // })
}
execute()