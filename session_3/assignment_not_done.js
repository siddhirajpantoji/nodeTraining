console.log("Demo of actual callback ")
const fs = require('fs')

// fs.readFile("","utf-8",)
function readSingleFile(pathOfFile, readOption, callback) {
    fs.readFile(pathOfFile, readOption, callback)
}

function writeSingleFile(pathToWrite, dataToWrite, callback) {
    fs.writeFile(pathToWrite, dataToWrite, callback)
}

function mainFunc() {
    readSingleFile("file/TestFile.txt", "utf-8", (err, data) => {
        if (err) {
            console.error("Error While readinhg File ", err)
            return
        }
        else {
            console.log(data)
            data = data + " are awesome persons :D "
            writeSingleFile("file/TestFile.txt", data, (err, data) => {
                if (err) {
                    console.log("Error While writing File", err)
                    return
                }
                else {
                    readSingleFile("file/TestFile.txt", "utf-8", (err, data) => {
                        if (err) {
                            console.log("Error in Reading for second Time ", err)

                        }
                        else {
                            console.log("Final Data :::" + data)
                        }

                    })
                }
            })
        }
    })
}
mainFunc()