var abc = "Hello"
console.log(abc)

function pqr(abc)
{
    
    abc = "Hi "
 //   this.abc = abc;
    console.log("Inside pQR")
    console.log(abc);
    console.log(this.abc);
    
}
pqr(abc);
var xyz = {
    cvb:"X",
    prq:function(cvb){
        console.log(this.cvb)
        console.log(cvb)
    }
}
xyz.prq("Y");
console.log("After PQR Call ");
console.log(abc);