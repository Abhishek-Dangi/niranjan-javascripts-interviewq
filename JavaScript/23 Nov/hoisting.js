// we can use variables and functions before declaring them.
x=10;
var x = 20;
console.log("x = "+x);

hoist();
function hoist(){
    var b =2;
    console.log(b)
    console.log("Function called before declared");
}

// console.log(b)
// console.log(sum(10,20));  
// function sum(a,b)  
// {  
// return a+b;  
// }  