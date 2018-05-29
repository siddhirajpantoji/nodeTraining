function isPrimeNumber(num) {
    // Code your logic here for Prime number and lets code together 
    for(  i = 0 ; i < num ; i++){
        if( i == 0 ||  i== 1 ){
            continue;
        }
        if( num % i ==0 ){
            break;
        }
    }
    if( i == 1 || i == 0 )
    {
        return false;
    } else if (i == num  ){
        return true;
    } else {
        return false;
    }
}

exports.abc = isPrimeNumber
 console.log(module.exports);
 console.log(exports);

module.exports.isPrimeNumber = isPrimeNumber
 console.log(module.exports);
 console.log(exports);
