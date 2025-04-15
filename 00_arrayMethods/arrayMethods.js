// Splice / Slice
let arr1 = ["I", "study", "JavaScript"]
arr1.splice(2,0, "complex");
console.log(arr1)

// Concat
let arr = [1, 2];
let arrayLike = {
  0: "something",
  length: 1
};
console.log(arr.concat(arrayLike));

// indexOf, lastIndexOf, includes
let arr2 = [1, 0, false];
console.log(arr2.indexOf(0));
console.log(arr2.lastIndexOf(false)); // uses STRICT EQUALITY (===) so '0' doesn't return as false, only false does
console.log(arr2.indexOf(null)); // Returns -1 if NOT Found
console.log(arr2.includes(1)); // Returns true or false

// arr.find(fn) --> If true, then the item is returned, otherwise 'undefined'
// generally find takes 3 inputs but we don't need to use all of them other than item find(function(item, index, array)
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"},
  ];
  
  let user = users.find(item => item.id == 1);
  
  console.log(user.name); // John

  // Find the index of the first John
console.log(users.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John --> remember index not ID
console.log(users.findLastIndex(user => user.name == 'John')); // 3

// filter returns an array of all matching items
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers);

// TRANSFORM AN ARRAY
// Map
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5, 7, 6

// sort(fn) BY DEFAULT ALL ITEMS ARE SORTED AS STRINGS
// neeed to pass a function into sort
let arr3 = [1, 2, 15];
arr3.sort();
console.log(arr3); // [1, 15, 2]

// We're now providing sort with the logic as to how to decide what order to place the numbers
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    };
arr3.sort(compareNumeric);
console.log(arr3);
// OR
arr3.sort( (a, b) => a - b );
console.log(arr3);

// arr.reverse to reverse the order of an array
let arr4 = [1, 2, 3, 4];
arr4.reverse();
console.log(arr4);

// split and join
let names = 'Bilbo, Gandalf, Nazgul';
let arr5 = names.split(', ');
for (let name of arr5) {
    console.log(name);
}

// The split method has an optional second numeric argument – a limit on the array length
let arr6 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
console.log(arr6)

// join
let str6 = arr6.join(';')
console.log(str6)

// reduce and reduceRight
// let value = arr.reduce(function(accumulator, item, index, array) {
// }, [initial]);
let arr7 = [1, 2, 3, 4, 5];
let result = arr7.reduce((sum, current) => sum + current, 0); // 0 is the initial, but we could use no initial and achieve the same result as 0 is default
console.log(result); // 15
// reduceRight does the same but goes from right to left

// use isArray instead of typeOf for Array
console.log(typeof {}); // object
console.log(typeof []); // object (same)

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

// Task 1 - Translate
function camelize(str) {
    return str
        .split('-')
        .map((word, index) => (index==0) ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
    }
console.log(camelize("background-color"));
console.log(camelize("-webkit-transition") == 'WebkitTransition');

// Task 2 - Filter Range
let arrToFilter = [5, 3, 8, 1];
function filterRange(arr, a, b) {
    return arr.filter((num) => b >= num >= a);
}

let filtered = filterRange(arrToFilter, 1, 4);
console.log(filtered);

// Task 3 - Filter Range in-place
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i,1);
        };
        } return arr;
}
console.log("Task 3");
console.log(filterRangeInPlace(arrToFilter, 1, 4));

// Task 4 - Sort in Decreasing Order
console.log("Task 4");
let arrDec = [5, 2, 1, -10, 8]
    
console.log(arrDec.sort().reverse());
console.log(arrDec.sort((a,b) => b - a));

// Task 5 - Copy & Sort
console.log("Task 5");
let arrStr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arrStr);

function copySorted(arr) {
    return arr.slice().sort()
}
console.log( sorted ); // CSS, HTML, JavaScript
console.log( arrStr ); //['HTML', 'JavaScript', 'CSS']

// Task 7 - Map to Names
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };


// let ppl = [ john, pete, mary ];
// let usersAreNamed = ppl.map(i => i.name);
// console.log(usersAreNamed);

// Task 8 - Map to Objects
// let usersMapped = ppl.map(item => ({
//     fullName: `${item.name} ${item.surname}`,
//     id: item.id

// }));
// console.log(usersMapped);

// task 9 Sort users by age
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let ppl = [ john, pete, mary ];


function sortByAge(arr) {
    return arr.sort((a,b) => (a.age - b.age));
}
console.log(sortByAge(ppl));

// Task 10 - random shuffle

let arr10 = [1, 2, 3];
function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

console.log(shuffle(arr10));

// Task 11 - Get Average Age
function getAverageAge(arr) {
    return arr.reduce((sum, current) => sum + current.age, 0) / arr.length;
}
console.log(getAverageAge(ppl));

// Task 12 - Filter Unique Array Members
function uniqueFinder(arr) {
    let unique = [];
    for (i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
};
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(uniqueFinder(strings));

// Task 13 - Create Keyed Object from Array
let users13 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

function groupByID(arr) {
    return arr.reduce((obj, val) => {
        obj[val.id] = val;
        return obj;
    }, {})
}
console.log(groupByID(users13));