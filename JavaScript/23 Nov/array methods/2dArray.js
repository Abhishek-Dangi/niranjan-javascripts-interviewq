// 2d array - if we have array inside an array, when we want a bigger data than we will use 2d array
const arr = [["potato", 1], ["orange", 2]];

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//     console.log(arr[i][j]);
// }
// }

var arr1 = arr.map((items) => {
    // console.log(items);
    items.map((itm) => {
        console.log(itm);
    })
})