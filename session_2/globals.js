//console.log("Output ", {"abc":"abc"});
//console.dir({"name":"Sidd",address: {"Area":"Kandivalir",locality:{"Street":"Street"}}},{depth:1});
//console.log(process);
// console.log(process.argv);
// var x = parseInt(process.argv[2]);
// var y = Number(process.argv[3]);
// console.log(x+y);
//console.log(global.global);//console.log(console);

function executeAfter2Seconds (){
    console.log("After two Seconds")
}
setTimeout(executeAfter2Seconds, 2000);
console.log("Before Timeout ");
console.log("DirName "+__dirname); // pwd 
console.log("FileName "+__filename);
//setInterval()
