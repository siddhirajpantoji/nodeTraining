
// OS Module memory Details  
const os = require("os");

var gb = 1/(Math.pow(1024, 3));
console.log("Total memory: ", os.totalmem() * gb, " GBs");
console.log("Available memory: ", os.freemem() * gb, " GBs");
console.log("Percentage consumed: ", 100 * (1 - os.freemem()/os.totalmem()), " %");
console.log("This machine has: ", os.cpus().length, " CPUs");
