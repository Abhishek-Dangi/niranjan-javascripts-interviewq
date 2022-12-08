// Loops - when we want to execute an statement while a specific condition is true.
// Do while      while      for       nested for

// Loops are used in JavaScript to perform repeated tasks based on a condition.

/* 
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/

console.log("do/while");
// do/while
var arr = [10, 20, 30, 40, 50];
let i = 0;
do {
  console.log(arr[i]);
  i++;
}
while (i < arr.length);

console.log("while");
// while
let j = 0;
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}

console.log("for loop");
// for loop
// for (initialization; condition; increment/decrement)  
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for/in
console.log("for/in");
const obj = {
  id: 1,
  name: "abhi",
  sirname: "dangi"
};
for (let k in obj) {
  console.log(k + " -> " + obj[k]);
}


// for/of
console.log("for/of");

// for (let l of arr) {
//   console.log(l);
// }

// for (let l of obj) {
//   console.log();
// }

// not working
// for (let l of arr){
//   console.log(arr[l]);
// }

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

for (const i of arr) {
  console.log(i);
}

for (let i of obj) {
  console.log(i);
}