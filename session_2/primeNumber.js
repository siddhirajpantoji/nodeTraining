
function isNumberPrime(num){
    
    if(!Number(num)){
        return false
    }
    if(num < 2 ){
        return false
    }
    for(count = 2 ; count < (num/2); count++){
        if(num%count == 0){
            return false
        }
    }
    return true
}

function abc(){
    console.log("ABC")
}

module.exports = {
    primeCheck : isNumberPrime, abc
}