// // the inner function has access to the outer function variable

// a closure gives you access to an outer function's scope from an inner function.

a = 10;
function outerFunc() {
    var b = 20;
    function innerFunc() { // this is closure
        var c = 30;
        return a, b, c;
        console.log("Global variable a = " + a);
        console.log("Outer variable b = " + b);
        console.log("inner variable c = " + c);
    }
}

outerFunc();


function fun() {
    var a = 4;
    function innerfun() // a closure  
    {
        return a;
    }
    return innerfun();
}
var output = fun();
console.log("Outer a = " + output);
console.log("Inner a = " + output);

// function fun1()
// {
// var a = 4;
// function innerfun() // a closure
// {
// console.log}
// return innerfun;
// }
// var output = fun1();
// console.log("Outer a = "+output());
// console.log("Inner a = " + output());  