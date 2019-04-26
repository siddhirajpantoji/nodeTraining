var abc = ()=>{
    console.log("Inside ABC ");
}
console.log(abc);
abc();
function add(num1, num2 , printResult){
    var sum = num1+num2;
    //setTimeout(()=>{
        
        printResult(sum);
   // }, 1000)
     //
    console.log("After SetTmeout ")   
}

//printResult = 
z = add(2,3, function(x){
    console.log("value of x ="+x);
    return x 
});
console.log("Z= "+z);