// to write shorter function syntax
// no need to write return for single values
// no need parameters paranthesis if not required

let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5, 7);
console.log(result1);

let sub = (a, b) => {
    return a - b;
}
let result = sub(20, 10);
console.log(result);
// output
// 12
// 10