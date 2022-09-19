let rows = process.argv[2]

function drawPattern(rowsToPrint){
    if(!Number(rowsToPrint)){
        console.log("Invalid Rows ")
        return false
    }
    if(rows <= 0 ){
        console.log("Invalid Row Count  ")
        return false
    }
    
    for(let rowCount = rows; rowCount >= 1; rowCount --){
        for(let colCount = rows; colCount>=1 ; colCount-- ){
            if(colCount > rowCount){
                process.stdout.write("  ")
            }
            else{
                process.stdout.write("* ")
            }
            
        }
        console.log("")
    }
}

drawPattern(rows)