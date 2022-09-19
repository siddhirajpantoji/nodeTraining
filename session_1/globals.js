// console.log("Number is %d", 1)
// console.log(process.env)
// console.log(process.argv)

// console.log(__dirname)
// console.log(__filename)

// setTimeout(() => {
//     console.log("Inside Set Timeout ")
// }, 1000)

for (let sleepCount = 1; sleepCount <= 10; sleepCount++) {
    setTimeout(() => {
        console.log("Inside SetTimeoutr for " + sleepCount)
    },10000)
    
    setTimeout(() => {
        console.log("Bhupesh ka Timeout  " + sleepCount)
    },5000)
    console.log("After Set Time out for "+sleepCount)
}
console.log("After for loop ")
