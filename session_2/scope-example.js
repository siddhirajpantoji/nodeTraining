// var , let , const 
var anyVar= "Sidd";
console.log(anyVar);
const xyz = "zyx";
/**
 * This is an example of mu
 * ltiline 
 * comments 
 */
//xyz = "ajsgdjhas" 

function abc(){
    // Scope of variable inside function 
    anyVar = "Sairaj ";
    let anyOthervar = "Pantoji";
    console.log(anyOthervar);
    console.log(anyVar);
    function inner(){
        console.log("Inside Inner ");
        console.log("Inner "+anyVar);
        console.log("Inner "+anyOthervar);
        function mostInner(){
            console.log("Most Inner Function ");
        }
        mostInner();
    }
    inner();
}
//console.log(anyOthervar);
abc();
console.log(anyVar);
