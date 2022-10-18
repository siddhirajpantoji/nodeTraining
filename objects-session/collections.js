const fs = require('fs')
let arr= []
console.log(arr)
arr = ["abc","pqr","pyasi", "Dayan"]
console.log(arr)
arr.push("Cute")
console.log(arr)
arr.push("Cute")
console.log(arr)
let folders = fs.readdirSync("..")
console.log(folders)
console.log(arr.length)
for(let iterative = 0 ; iterative < arr.length; iterative++){
    console.log(arr[iterative])
}
let str = "This is going to be a very long comment About beauties of nature which help in relaxation of mind and Body."
let words = str.split(" ")
console.log(words.length)