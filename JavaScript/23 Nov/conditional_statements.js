// Conditional Statements - when we want to execute a code on the basis of a condition then we use Conditional Statements
// if   if else   if else if
console.log("Conditional Statements");
let age = prompt("Hey what is your age");
console.log("age = " + age);
let b = alert("your age is " + age);
c = parseInt(age);
console.log("c = " + c);
console.log("typeof c = " + typeof (age));

// if statement
if (age >= 18) {
  alert("You can vote");
}

// if else statement
if (age >= 18 && age <= 45) {
  alert("You are adult vote");
}
else // optional
{
  console.log("You can't vote");
}
console.log("Done");

// if else if statement
if (age >= 9 && age <= 18) {
  console.log("You are a kid");
}
else if (age >= 18 && age <= 60) {
  console.log("You are adult so, you can drive car");
}
else {
  console.log("Not valid");
}
