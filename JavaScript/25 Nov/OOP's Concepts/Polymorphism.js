// Polymorphism - provides a way to perform a single action in different forms. It provides an ability to call the same method on different JavaScript objects.

// same name method in different classes
// this is called method overriding.
class A{
    display() {
        console.log("A display is invoked!!");
    }
}
class B extends A{
        display() {
        console.log("B display is invoked!!");
    }
}

var bObj = new B();
bObj.display();