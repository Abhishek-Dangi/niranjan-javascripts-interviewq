// calls the specified function for every array element and returns the new array.
// const arr1 = [4, 9, 16, 25];
// console.log("typeof (arr1) = "+ typeof (arr1));
// let result = arr1.map(x => x * 2);
// console.log(result);
// console.log("typeof (result) = " + typeof (result));

// const sqrt = arr1.map(Math.sqrt)
// console.log("sqrt = " + sqrt);

// 2nd example
const persons = [
  {
    firstname: "neer", lastname: "patel",
    fullDetails: function fDetails() {
      console.log("Inner function called");
  }
  },
  {firstname : "abhi", lastname: "singh"},
  {firstname : "ishu", lastname: "sharma"}
];

// console.log(persons[0].firstname);
// console.log(persons[0].fullDetails());

persons.map((item) => {
      console.log(item); 
    // console.log(item.firstname+" "+item.lastname); 
});

// let res1 = arr1.slice(1, 2);
// console.log(res1);

// let res2 = arr1.splice(1, 2,);
// console.log(res2);