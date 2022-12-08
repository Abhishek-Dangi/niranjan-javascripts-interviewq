// Encapsulation
// Encapsulation is a process of binding the data (i.e. variables)with the functions acting on that data

// To achieve encapsulation
// Use var keyword to make data members private.
// Use setter methods to set the data and getter methods to get that data.

class student {
    constructor() {
        var name;
        var marks;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getMarks() {
        return this.marks;
    }
    setMarks(marks) {
        ``
        this.marks = marks;
    }
}

var stud = new student();
stud.setName("Neer");
stud.setMarks(90);
console.log(stud.getName());
console.log(stud.getMarks());