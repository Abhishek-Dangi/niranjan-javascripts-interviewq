// Higher order fuction - to pass a function as an argument or return a function from another function

// ex.1 returning function from a function
// function main(x) {
//     return hOrder1(x);
// }

// function hOrder1(y) {
//     console.log("Value of y after getting parameter from a returning function = " + y);
// }

// function hOrder2(y) {
//     console.log("Value of y after getting parameter from a returning function = " + y);
// }

// main(20);


// passing function as a parameter to another function

function main(hFunc) {
    hFunc();
}

function hOrder() {
    var y = 100;
    console.log("Value of y after passing a function as parameter  to another function = " + y);
}

main(hOrder);