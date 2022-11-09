let arr = []
for (let index = 0; index < 10; index++) {
    arr.push(index)
}
console.log(arr)


function sleepDarling(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(timeout==8 || timeout ==6){
                reject("OH no baby "+timeout)
            }
            resolve("Oh Baby " + timeout)
            
        }, timeout * 1000)
    })
}
promiseArr = []
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    vachan = sleepDarling(element)
    promiseArr.push(vachan)
}
console.log(promiseArr)
Promise.all(promiseArr).then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})