'use strict'
class Laptop {
    // constructor() {
    //     this.companyName = undefined
    //     this.ramSize = undefined
    // }

    constructor(companyName , ramSize ){
        console.log("Inside Constructor ")
        this.companyName = companyName
        this.ramSize= ramSize
    }

    getCompanyName() {
        return this.companyName
    }
    getRAM() {
        return this.ramSize
    }

    getLaptopInfo(){
        return{
            "companyName":this.companyName,
            "ram":this.ramSize
        }
    }
}
module.exports = Laptop