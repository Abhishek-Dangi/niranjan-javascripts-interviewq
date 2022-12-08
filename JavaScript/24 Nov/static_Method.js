// JavaScript static Method
// static methods belong to the class instead of an instance of that class. So, an instance is not required to call the static method. These methods are called directly on the class itself.

class test{
    static display() {
        return "Static method invoked";
    }
}
console.log(test.display()); // static method invoked directly using class name