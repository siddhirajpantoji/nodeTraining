const fs = require('fs')

let fileName = "abc.json"
let content = fs.readFileSync(fileName,"utf-8")
console.log(content)
console.log(typeof(content))
let jsonContent = JSON.parse(content)
console.log(jsonContent)
console.log(typeof(jsonContent))