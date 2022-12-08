// var is global accessible all program
// let is scopic accesible in codeblock
// const is never change. it is define one time never change next time 


console.log("var_let_const");
let a;
a = 36;
const ax = 78;
{
  ax = 75;
}
ax = 75;


var b = "str";
var c = null;
var d = undefined;
var e = true;
console.log("Outside b = " + b);
{
  var b = "STR";
  console.log("inside b = " + b);
}

let b1 = 23;
console.log("outside b1 = " + b1);
{
  let b1 = "Nir";
  console.log("inside b1 = " + b1);
}

const name = "nirnjan";
console.log("name = " + name);
{
  const name = "patel";
  console.log("name = " + name);
}