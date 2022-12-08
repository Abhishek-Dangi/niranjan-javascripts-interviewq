// Same name methods in different inherited classes 
class A  
  {  
     display(a)  
    {  
      console.log("a in A = "+a);  
    }
  }  

class B extends A  
  {  
    display()  
    {  
      console.log("B is invoked");  
    }  
  }  
  
var b = new B();
// b.display(); // if we call using child class than child class method override to parent class method

var a = [new A(), new B()]; // method overloading is not fully aplicable in JS because of predefined    functions like forEach, spread operator
a.forEach((element) => {
    element.display(1);
});