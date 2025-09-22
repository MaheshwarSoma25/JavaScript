// Define a simple function that prints a greeting
function greet() {
  console.log("Good morning");
}

// Call the greet function
greet();

// Function with a parameter and argument
function myFunction(msg) { // "msg" is the parameter
  console.log(msg);
}
myFunction("Hello"); // "Hello" is the argument

// Function to calculate and print the sum of two numbers
function sum(a, b) {
  console.log(a + b);
}

// Function that returns the sum of two numbers
function sum(a, b) {
  return a + b;
}
console.log(sum(19, 81)); // Output: 100

// Arrow function to multiply two numbers
const arrowMul = (a, b) => {
  return a * b;
}
console.log(arrowMul(19, 81)); // Output: 1539

// Arrow function with implicit return to print "Hello"
const printHello = () => console.log("Hello");

// Function to count vowels in a string using for...of loop
function vowels(name) {
  let countVowels = 0;
  for (let i of name) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      countVowels++;
    }
  }
  return countVowels;
}
console.log(vowels("Maheshwar")); // Output: 3

// Arrow function version to count vowels
let vowel5
 = (name) => {
  const v = "aeiouAEIOU";
  let countVowels = 0;
  for (let i in name) {
    if (v.includes(name[i])) {
      countVowels++;
    }
  }
  return countVowels;
}
console.log(vowels("Maheshwar")); // Output: 3

// // Using forEach to print each element of an array
// const arr = [1, 2, 3, 4];

// arr.forEach(function printVal(val) {
//   console.log(val);
// });

// // Using arrow function with forEach
// arr.forEach((val) => {
//   console.log(val);
// });

// // Print squares of each element in the array using forEach
// let nums = [4, 7, 8, 9, 3];

// nums.forEach((num) => {
//   console.log(num ** 2);
// });

// // Define a reusable arrow function to print square of a number
// let getSquare = (num) => {
//   console.log(num ** 2);
// }

// // Use getSquare with forEach
// nums.forEach(getSquare);

// // Use map to create a new array with each value doubled
// let newArr1 = arr.map((val) => {
//   return val * 2;
// });

// // Use filter to create a new array with only even numbers
// let newArr2 = arr.filter((val) => {
//   return val % 2 == 0;
// });
// console.log(newArr2); // Output: [2, 4]

// // Use reduce to calculate the sum of array elements
// const array1 = [1, 2, 3, 4];

// const newArr = array1.reduce((first, second) => {
//   return first + second;
// });
// console.log(newArr); // Output: 10

// // Use reduce to find the greatest number in the array
// const greaterNum = array1.reduce((first, second) => {
//   return first > second ? first : second;
// });
// console.log(greaterNum); // Output: 4

// // Filter marks greater than 90
// let marks = [80, 91, 49, 60, 78];

// const filterMarks = marks.filter((val) => {
//   return val > 90;
// });
// console.log(filterMarks); // Output: [91]

// Prompt user for a number and create an array from 1 to that number
// let inputNum = prompt("Enter the range.");

// let arrNum = [];

// for (let i = 1; i <= inputNum; i++) {
//   arrNum[i - 1] = i;
// }
// console.log(arrNum);

// // Use reduce to calculate the sum of numbers in the array
// let sumInput = arrNum.reduce((first, second) => {
//   return first + second;
// });
// console.log(sumInput);

// // Use reduce to calculate the product of numbers in the array
// let mulInput = arrNum.reduce((first, second) => {
//   return first * second;
// });
// console.log(mulInput);