let obj = {
    "name": "David ",
    "department": "HR",
    "address": {
        "city": "Navi Mumbai",
        "pincode": "",
        "Town": "Koparkhairane"
    },
    "hiringPerson": function () {
        console.log(this.name + " is Hiring")
    }
}
console.log(obj)
console.log(obj.address.Town)
let val = obj.address1
if (val) {
    console.log("Value found")
}
else {
    console.log("Property not found")
}
let keys = Object.keys(obj)
console.log(keys)
val = keys.includes("name")
console.log(val)

let keyName = process.argv[2]
val = obj[keyName]
if(val){
    console.log("Value Found")
}
else{
    console.log("Value Not found")
}

obj.name2 = "Darwins"
obj[keyName] = "bas Itna sa Khwab hai "
console.log(obj)