let x = "Bhupesh"
console.log(x)
x = 50
console.log(x)
x = 80.555
console.log(x)
x = {
    "name": "Imran"
}
console.log(x)

//  function sayHello(name){
//     console.log("Hello "+name)
//  }

let sayHello = function (name) {
    console.log("Hello " + name)
}
console.log(sayHello)
sayHello("Raj")

function add(num1, num2, res) {
    console.log("Inside Add ")
    //return num1 + num2
    res(num1 + num2)
}

//  function displayResult (result){
//     console.log("Inside Display Result ")
//     console.log(result)
// }
// let displayResult = function (result){
//     console.log("Inside Display Result ")
//     console.log(result)
// }
// let displayResult = (result) => {
//     console.log("Inside Display Result ")
//     console.log(result)
// }

// console.log(add(2,3))
add(2, 3, (result) => {
    console.log("Inside Display Result ")
    console.log(result)
})

process.stdout.write("For Writing in single Line ")
process.stdout.write("For Writing in single Line ")
