// Encapsulation
// Encapsulation is a process of binding the data (i.e. variables)
// To achieve
// Use var keyword to make data members private.
// Use setter methods to set the data and getter methods to get that data.

class student{
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
        if (marks < 0 || marks > 100) {
            console.log("Invalid marks");
        } else {
            this.marks = marks;
        }
    }
}

var stud = new student();
stud.setName("Neer");
stud.setMarks(10);
console.log("Name = "+stud.getName());
// console.log(name);
console.log("Marks = "+stud.getMarks());