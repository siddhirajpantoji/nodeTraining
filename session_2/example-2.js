var divide= function(a,b, res){
    return  res(a/b);
}
var result = function(x){
    console.log("hgdha")
    console.log(x);
    return x;
}
console.log(divide(2,3,result));