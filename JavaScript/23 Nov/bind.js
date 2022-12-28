// // bind() - we can bind an object to a common function
// var empDetails = {
//    name: "Neer",
//    sirName: "Patel",
//    printFunc: function () {
//       console.log(this.name);
//       console.log(this.sirName);
//    }
// } 

// // var printFunc2= empDetails.printFunc.bind(empDetails);
// //using bind() 
// // bind() takes the object "empDetails" as parameter//
// //   printFunc2();
// // console.log(printFunc2());
// empDetails.printFunc();
// // console.log(printFunc2.name);


var empDetails = {
   name: "Neer",
   sirName: "Patel",
   printFunc: function () {
      console.log(this.name);
      console.log(this.sirName);
   },
   name1: "abhishek",
   sirName1: "dangi",
   abhi: function () {
      console.log(this.name1);
      console.log(this.sirName1);
   },
   friend: function () {
      console.log(this.name + " and " + this.name1 + " ❤💖are those friends");
   }
}

empDetails.printFunc();
empDetails.abhi();
empDetails.friend();