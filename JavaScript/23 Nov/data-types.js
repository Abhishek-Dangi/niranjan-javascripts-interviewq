// Data Types - LLBBNNU
console.log("primitive_data-types");
let a = null;
let b = 23;
let c = true;
let d = "Neer";
let e = BigInt;
let f = Symbol("This is symbol(data type)");
console.log("a = " + a);
console.log("typeof a = " + typeof (a));
console.log("b = " + b);
console.log("typeof b = " + typeof (b));
console.log("typeof c = " + typeof (c));
console.log("typeof d = " + typeof (d));
console.log("typeof e = " + typeof (e));
console.log("typeof f = " + typeof (f));

// Object
const item = {
  "id": 809,
  "Harry": true,
  "lavish": false,
  "name": "Neer",
}

console.log(item["id"]);
console.log(item.lavish);

console.log("typeof item = " + typeof (item));
const objToStr = item.toString();
console.log("typeof item = " + typeof (objToStr));