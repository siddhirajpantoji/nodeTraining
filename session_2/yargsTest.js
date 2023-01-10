const yargs = require('yargs')
let argv = yargs.argv
let num = argv.num
if(!num){
    console.log("Ek hi to Number dalna hai Bhai ")
    return
}
const primeNumber= require('./primeNumber')

const isNumberPrime = primeNumber.primeCheck
console.log(isNumberPrime(num))