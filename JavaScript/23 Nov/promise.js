/*
promise makes a promise to return a result. 
it is the solution of callback hell situation.
*/

// resolve will return success result and will attach result in .then
// reject will return error message  and will attach result in .catch

// let promise = new Promise(function (resolve, reject) {
//   // resolve("\nPromise working properly...!!!\n");
//   reject("found an error!");
// });


// promise.then((result) => {
//   console.log(result)
// }).catch((error) => {
//   console.log(error);
// });



//prectis
let promise = new Promise(function (resolve, reject) {
  // resolve("success");
  reject("found an error!");
});
promise.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
})


//syntax:---->

// let promise = new Promise(function (r, j) {
  
// });

//use this promise
// Promise.then(() => {
  
// }).catch(() => {
  
// });
