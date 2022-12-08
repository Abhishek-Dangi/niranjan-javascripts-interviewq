// Iterate an array
// var emp = ["Sonoo", "Vimal", "Ratan"];
// for (i=0;i<emp.length;i++){
// console.log(emp[i] + " ");
// }
// console.log("\n");

// Iterate an 2d array 
var emp=[["Sonoo1","Vimal1","Ratan1"],["Sonoo2","Vimal2","Ratan2"],["Sonoo3","Vimal3","Ratan3"]];  
console.log("iterate 2d array");  
for (i=0;i<emp.length;i++){
    for (j=0;j<emp.length;j++){
console.log(emp[i][j]);
}
console.log("\n");
}

// emp.map((items) => {
//     // console.log(items);
//     console.log(items[0]);
// })