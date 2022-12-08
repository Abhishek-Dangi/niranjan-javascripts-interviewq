// JavaScript Constructor Method
// Points to remember
// The constructor keyword is used to declare a constructor method.
// One class can contain one constructor method only.
// JavaScript allows us to use parent class constructor through super keyword.
// constructor used to provide parameters to class

// A constructor is a special function that creates and initializes an object instance of a class


class constr {
    constructor() {
        this.id = 1;
        this.name = "Neer";
    }
}

class chld extends constr {
    constructor() {
        super();
        this.company = "TRH";
        // console.log(this.id);
    }
}

var cns = new chld();
console.log("Id = " + cns.id + "\n" + "Name = " + cns.name + "\n" + "Company = " + cns.company);
// console.log(`Id = ${cns.id} \nName = ${cns.name}\nCompany = ${cns.company}`);