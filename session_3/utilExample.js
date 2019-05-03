var util = require('util');
var templateStr= "Hello Mr.%s";
var name = "Siddhiraj";
var nameStr = util.format(templateStr,name); // This is similar to printf but read the documentation 
console.log(nameStr);
// Follow Link https://nodejs.org/dist/latest-v10.x/docs/api/util.html 