// to invoke the specified function once for each array element and it will not create a new array as map method.
const arr1=['c','c++','java','python'];
arr1.forEach((fetchArr)=>{
    console.log(fetchArr);
})

var arr2 = [{
    obj1: [{ "value": 10 }, { "value": 17 }, { "value": 15 }, { "value": 12 }]
}
];
var arr3 = [13];

// var sum = 0;
(
arr2.forEach((element) => {
    console.log(element.obj1[2].value)
    arr3.push(element.obj1[2].value);
    // element.obj1.forEach(el) => {
    //     console.log(el.value)
    //     arr3.push(el.value);
    // })
// sum+=element;
}));
console.log(arr3);