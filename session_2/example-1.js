var abc = "Hello"
console.log(abc)

function pqr(){
    console.log("Inside PQR")
    abc = "Hi "
    console.log(abc);
}

pqr();
console.log(abc);