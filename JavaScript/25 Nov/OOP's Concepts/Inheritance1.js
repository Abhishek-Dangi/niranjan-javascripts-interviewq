class Bike{
    constructor() {
        this.company = "Royal Enfield";
    }
}

class Vehicle extends Bike{
    constructor(model,year) {
        super();
        this.model = model;
        this.year = year;
    }
}

var vObj = new Vehicle("Classic 350", 2021);
console.log("model = "+vObj.model +"\n"+ "year = " + vObj.year +"\n"+"company = "+ vObj.company);