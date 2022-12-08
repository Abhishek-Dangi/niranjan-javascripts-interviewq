const arr = [1, 2 ,3];

// calling the Symbol.iterator() method
const arrIterator = arr[Symbol.iterator]();

// gives Array Iterator
console.log(arrIterator);

const str = 'hello';

// calling the Symbol.iterator() method
const strIterator = str[Symbol.iterator]();

// gives String Iterator
console.log(strIterator);