class Bike{
    constructor() {
        console.log("Parent class constructor called");    
    }
}

class Vehicle extends Bike{
    constructor() {
        super();
        console.log("Child class constructor called\n");    
    }
}
var vObj = new Vehicle();