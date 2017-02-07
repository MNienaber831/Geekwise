var students = ['matthew', 'david', 'haley', 'marissa', 'micaela', 'osvaldo', 'rosamaria', 'alfredo', 'rigoberto', 'leonardo', 'gustavo', 'eric', 'kevin', 'montgomery', 'cobi', 'joshua'];

// function randomStudent(){
//   var numStudents = students.length;
//   var randStudent = Math.ceil(Math.random() * numStudents ) - 1;
//   alert(students[randStudent]);
// }
// randomStudent();

var fruits = ['apple', 'cherry', 'strawberries', 'pomegranate', 'orange'];
// console.log(fruits);

// Push - adds to the end of an array

fruits.push('avocado');
// console.log(fruits);

// Pop - removes from the end of an array

var lastFruit = fruits.pop();
// console.log(fruits);
// console.log(lastFruit);

//Unshift - adds to the front of an array

fruits.unshift('kiwi');
// console.log(fruits);

//Shift - removes from the front of an array

var firstFruit = fruits.shift();
// console.log(fruits);
// console.log(firstFruit);

//IndexOf - finds the index of an item in an array

var posFruit = fruits.indexOf('strawberries');
// console.log(posFruit);

//Splice - number of elements being removed

var remFruit = fruits.splice(1, 1);
//                           ^  ^
//                       index  number removed
// console.log(remFruit);
// console.log(fruits);

//Slice - copies an array

var copyFruit = fruits.slice(2, 3);
//                           ^   ^
//              starting index   up-to but not including
// console.log(fruits);
// console.log(copyFruit);

var math = ['math'];
console.log(math);
math.unshift('science', 'trig');
console.log(math);
math.push('history', 'bio', 'civics');
console.log(math);
var copyMath = math.slice(4, 5);
console.log(copyMath);
console.log(math);
//Sort - machine alphabetization
math.sort();
console.log(math);
//Reverse
math.reverse();
console.log(math);

var nums = [0, 53, 5, 103, 7, 78, 10];
//0, 5, 7, 10, 53, 78, 103
nums.sort();
console.log(nums);
