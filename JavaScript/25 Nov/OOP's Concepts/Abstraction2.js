//Creating a constructor function  
 function Vehicle()  
{  
    this.vehicleName="vehicleName";  
    throw new Error("An instance of Abstract Class cannot be created");  
}  
Vehicle.prototype.display=function()  
{  
    return "Vehicle is: "+this.vehicleName;  
}  
//Creating a constructor function  
function Bike(vehicleName)  
{  
    this.vehicleName=vehicleName;  
}  
//Creating object without using the function constructor  
Bike.prototype=Object.create(Vehicle.prototype);  
var bike=new Bike("Suzuki");  
console.log(bike.display());  