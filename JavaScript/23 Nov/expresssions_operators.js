// expression - is a value given to variables, constants
// operators - to do operations between variables(operands)

// expression
77;
"neer";
false;
// Operators

console.log("Arithmatic Operators");
// Arithmatic Operators
// +   -   *   %    /   
let a = 20;
let b = 10;

console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("a / b = " + a / b);
console.log("a * b = " + a * b);
console.log("a ** b = " + a ** b);
console.log("a++ = " + a++);
console.log("a = " + a);
console.log("++a = " + ++a);
console.log("b-- = " + b--);
console.log("--b = " + --b);

console.log("Assignment Operators");
// Assignment Operators
// =   +=   -=   *=   /=   %=   **=
let assign = 100;
console.log("assign = " + (assign));
console.log(assign -= 5);
console.log(assign *= 5);
console.log(assign /= 5);
console.log(assign **= 5);
console.log(assign %= 5);

console.log("Comparison Operators");
// comparison operators
// ==   ===   !=   !==   >   >=   <   <=
let comp1 = 34;
// let comp1 = 34;  
let comp2 = 834;
console.log(comp1 == comp2);
console.log(comp1 === comp2);
console.log(comp1 != comp2);
console.log(comp1 !== comp2);
console.log(comp1 > comp2);
console.log(comp1 >= comp2);
console.log(comp1 < comp2);
console.log(comp1 <= comp2);

console.log("Logical Operators");
// Logical Operators
// && || !
let x = 6;
let y = 9;
console.log(x == 6 && y == 6);
console.log(x == 6 || y == 6);
console.log(!(x == 6 || y == 6));

// Special Operators
// typeof

// Comments - When we dont want to execute any statement in js than we will use comments
// single line comment
/* multi-line comment */

// Ternery Operator
//    ?:

let age = prompt("Enter your age");
console.log(age >= 18 ? "You can vote" : "Can't vote");
var result = age >= 18 ? age : "Not eligible";
console.log(result);