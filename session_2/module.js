//console.log(module);
module.exports.sayHello = ()=>{
    console.log("Hello ")
}
console.log(module.exports);
console.log(exports);
exports.sayHi = ()=>{
    console.log("Hi ")
}
console.log(exports);
console.log(module.exports);
