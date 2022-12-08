/*
"async and await make promises easier to write"
async keyword makes a function return a Promise
await keyword makes a function wait for a Promise(result)
mostly used when fetch data from a real API 
*/

// with anonymose functions
async function myDisplay() {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("Resolved!!");
      reject("Error message");
    }, 2000);
  });
  console.log(await myPromise);
  console.log("Waited for awaited Promise");
}
myDisplay();

// with callback functions
// async function showData() {
//   let proms = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Resolved!!");
//       reject("Error message");
//     }, 3000);
//   });
//   console.log(await proms);
//   console.log("await for proms");

// }
// showData();