// callback function passed as an argument to another function 
//or call by another function or after execution of another function.
// function
// function greet(name, callBack) {
//     console.log('Hiiii' + ' ' + name);
//     callBack();
// }

// // callback function
// function callBack() {
//     console.log('This is callback function');
// }
// greet('Peter', callBack);



function greet(name, callback) {
    console.log('hii' + ' ' + name);
    callback();
}

function callback() {
    console.log('this is callback function try to prectis');
}

greet('abhi', callback);