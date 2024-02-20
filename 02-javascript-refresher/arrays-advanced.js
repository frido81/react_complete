
let newArray = ["red", "green", "blue", "violet", "pink", "purple"]

// map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
let mappedArray = newArray.map((item) => item + "!");
console.log(mappedArray)

// find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// returns first element
let foundElement = newArray.find((item) => item.match(/p/))
console.log(foundElement)

// findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
let foundIndex = newArray.findIndex((item) => item.match(/p/))
console.log(foundIndex)

// filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
let filteredArray = newArray.filter((item) => item.length == 4)
console.log(filteredArray)

// reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
//
// The reduce() method of Array instances executes a user-supplied "reducer"
// callback function on each element of the array, in order, passing in the
// return value from the calculation on the preceding element. The final result
// of running the reducer across all elements of the array is a single value.
//

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    // return value of previous calculation (set to initialvalue, here 0), current element
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log(sumWithInitial);
// Expected output: 10


// concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
const arrayA = ["a", "b", "c"]
const arrayB = ["d", "e", "f"]
const array3 = arrayA.concat(arrayB);

// slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array
// object selected from start to end (_END NOT INCLUDED_) where start and end represent the index of items in
// that array. The original array will not be modified.

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2))
console.log(animals.slice(2, 4))
console.log(animals.slice(1, 5))
console.log(animals.slice(-2))
console.log(animals.slice(2, -1))
console.log(animals.slice())

// splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// The splice() method of Array instances changes the contents of an array by removing or replacing existing
// elements and/or adding new elements in place.

const months = ["Jan", "March", "April", "June"]
months.splice(1, 0, "Feb")
console.log(months)

months.splice(4, 1, "May")
console.log(months)