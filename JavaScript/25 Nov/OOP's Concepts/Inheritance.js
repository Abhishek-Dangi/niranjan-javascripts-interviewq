// Inheritance
// one class can inherit properties of another class
// Provide facility to child class to reuse the methods and variables of a parent class.
// Inheritance makes our code reusable inside an source code

class time extends Date{
    constructor() {
        super();
    }
}
var m = new time();
console.log("TODAY's DATE");
console.log(m.getDate()+"/"+m.getMonth()+"/"+m.getFullYear());
