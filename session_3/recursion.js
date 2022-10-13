// for(let count = 1; count <= 10 ; count++){
//     console.log(count)
// }

function printNumber(num)
{
    if(num<=10){
        console.log(num)
        num++
        printNumber(num)
    }
    else{
        return 
    }
}
printNumber(1)