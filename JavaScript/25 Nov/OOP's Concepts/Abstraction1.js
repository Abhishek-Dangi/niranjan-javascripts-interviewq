// Abstraction
// abstraction is a way of hiding the implementation details and showing only the functionality to the users.
// We cannot create an instance of Abstract Class.
// It reduces the duplication of code.

class abst {
  constructor(x,y) {
     this.a=x;
     this.b=y;
    console.log("a inside constructor = " + this.a);
    console.log("b inside constructor = " + this.b);
  }
  // method to set values of internal members
  set(x, y) {
    this.a = x;
    this.b = y;
  }
  display() {
      console.log("a = " + this.a);
      console.log("b = " + this.b);
  }
}
const obj = new abst(10,20);
obj.set(10, 20);
obj.display();