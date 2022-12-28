//  call() and apply() method allows us to write a method that can be used on different objects.



// const empDetails = {
//     fullAddress: function () {

//         return this.name + " " + this.company + " " + this.state;
//     }
// };

// const address = {
//     name: "Neer",
//     company: "TRH",
//     state: "MP"
// };
// console.log("Call method");
// console.log(empDetails.fullAddress.call(address));
// console

// console.log("Apply method");
// console.log(empDetails.fullAddress.apply(address));


const empDetails = {
    fulladdress: function () {
        return this.name + " " + this.comp + " " + this.state;
    }
};

const address = {
    name: "abhi",
    comp: "drh",
    state: "41",
};
const address1 = {
    name: "null",
    comp: "not metion",
    state: "10",
};

console.log("call method");
console.log(empDetails.fulladdress.call(address));
console.log("apply method");
console.log(empDetails.fulladdress.apply(address1));

