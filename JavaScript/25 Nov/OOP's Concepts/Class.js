// class
// classes are the special type of functions.

// Declaring class
class employee{

    // initializing an object
    constructor(id,name) {
        this.id = id;
        this.name = name;
    }

    // Declaring a method
    detail() {
        console.log(this.id+" "+this.name);
    }
}

// Passing object to a variable
var e1 = new employee(1, "Neer");
var e2 = new employee(2, "Darshan");

e1.detail();
e2.detail();