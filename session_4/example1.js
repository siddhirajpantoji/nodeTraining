var obj = '{"abc":"abc"}' // Json in simple String
console.log(obj);
console.log( typeof obj); 
var xyz = JSON.parse(obj); // Parsing Json
console.log(typeof xyz); 
console.log(xyz); 
console.log(xyz.abc);
console.log(obj.abc);
console.log("Foram")
console.log(JSON.stringify(xyz));