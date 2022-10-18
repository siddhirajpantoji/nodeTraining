const Laptop = require('./Laptop')

let bhupesh = new Laptop()
// bhupesh.ramSize = "8GB"
// bhupesh.companyName = "HP"

console.log(bhupesh.getLaptopInfo())
let imran = new Laptop("HP promax", "16GB")
console.log(imran.getLaptopInfo())

