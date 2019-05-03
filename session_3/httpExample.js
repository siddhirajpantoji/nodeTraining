var http = require('http');
var fs = require('fs')
server= http.createServer((req,res)=>{
    
    res.write(fs.readFileSync('Assignment.txt'));
    //res.write("Hello World");
    res.end();
})
server.listen(3000);

// For More info visit Documentation by yourself . bade ho gaye ho . Apna rasta dhundh lena 
