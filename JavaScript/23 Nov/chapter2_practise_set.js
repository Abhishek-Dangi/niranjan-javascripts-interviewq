// chapter - 2 practise set
// q.1
let age = prompt("Enter age");
if (age >= 10 && age <= 20) {
  console.log("You are between 10 & 20");
}
else {
  console.log("You are not between 10 & 20");
}

// switch case
let name = prompt("Enter string");
switch (name) {
  case "neer": {
    console.log("name");
  }
    break;
  case "patel": {
    console.log("sirname");
    break;
  }
  default: {
    console.log("not name or sirname");
  }
}

// q.3
let num1 = 12;
if (num1 % 2 == 0 && num1 % 3 == 0) {
  console.log("Divisable");
}
else {
  console.log("Not Divisable");
}
// q.4
let num2 = 22;
if (num2 % 2 == 0 || num1 % 3 == 0) {
  console.log("Divisable");
}
else {
  console.log("Not Divisable");
}

// q.5 using ternery operator
console.log(age >= 18 ? "You can drive" : "You can't drive");
