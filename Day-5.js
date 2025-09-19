// // Define function
// function greet() {
//   console.log("Good morning")
// }

// // Call function
// greet();

// function myFunction(msg) { //parameter
//   console.log(msg)
// }
// myFunction("Hello") //Argument

// // Calulate Sum using function
// function sum(a, b) { 
//   console.log(a + b)
// }

// function sum(a, b) { 
//   return a + b
// }
// console.log(sum(19, 81) )

// const arrowMul = (a, b) => { 
//   return a * b;
// }
// console.log(arrowMul(19, 81));

// const printHello = () => console.log("Hello");

// function vowels(name) {
//   let countVowels = 0;
//   for (let i of name) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//       countVowels++;
//     }
//   }
//   return countVowels;
// }
// console.log(vowels("Maheshwar"));

// // Using Arrow function
// let vowels = (name) => {
//   const v = "aeiouAEIOU"
//   let countVowels = 0;
//   for (let i in name) {
//     if (v.includes(name[i])) {
//       countVowels++;
//     }
//   }
//   return countVowels;
// }
// console.log(vowels("Maheshwar"));

// //forEach
// const arr = [1, 2, 3, 4];

// arr.forEach(function printVal(val) {
//   console.log(val);
// });


// arr.forEach((val) => {
//   console.log(val);
// });

// //Print squares of each element in the array using forEach
// let nums = [4, 7, 8, 9, 3];

// nums.forEach((num) => {
//   console.log(num ** 2);
// });

// let getSquare = (num) => {
//   console.log(num ** 2);
// }

// nums.forEach(getSquare)

// let newArr1 = arr.map( (val) => {
//   return val * 2;
// })

// // Print even
// let newArr2 = arr.filter((val) => {
//   return val % 2 == 0;
// })

// console.log(newArr2)

// const array1 = [1, 2, 3, 4];

// const newArr = array1.reduce((first, second) => {
//     return first + second
//   }
// );
// console.log(newArr);
// // Expected output: 10

// const greaterNum = array1.reduce((first, second) => {
//     return first > second ? first : second;
//   }
// );
// console.log(greaterNum);

// let marks = [80, 91, 49, 60, 78]

// const filterMarks = marks.filter((val) => {
//     return val > 90;
//   }
// );
// console.log(filterMarks);

let inputNum = prompt("Enter the range.");

let arrNum = [];

for (let i=1; i<=inputNum; i++) {
  arrNum[i-1] = i
}

console.log(arrNum);

let sumInput = arrNum.reduce((first, second) => {
  return first + second;
}) 
console.log(sumInput);

let mulInput = arrNum.reduce((first, second) => {
  return first * second;
}) 
console.log(mulInput);
