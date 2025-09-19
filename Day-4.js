// Creating arrays
let marks = [80, 91, 49, 60, 78]
let avengers = ["Tony", "Steve", "Bruce", "Thor", "Nat", "Clint"];
console.log(marks)

// Array length
console.log(marks.length);

// Accessing & modifying
console.log(avengers[0]); // Tony
avengers[5] = "Spider-Man";   // replace Clint with Spider-Man

// Iterating over arrays
// for loop
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}
// for of
for (let i of avengers) {
  console.log(i.toLocaleUpperCase())
}

// Problem: Average of marks given in Array
let sum = 0;
for (let i of marks) {
  sum = sum + i
}
// console.log(sum)
let avg = sum/marks.length
console.log(`Average of ${marks} is ${avg}`)


let price = [700, 865, 239, 730, 956, 48]

for (let i of price) {
  discount = i/10
  offerPrice = i - discount
  console.log(offerPrice)
}

for (let i=0; i<price.length; i++) {
  let discount = price[i]/10;
  price[i] = price[i] - discount;
}
console.log(price);

let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Mango"];

// Common array methods
fruits.push("Grapes");   // add at end
fruits.pop();            // remove last
fruits.unshift("Kiwi");  // add at start
fruits.shift();          // remove first

// for…of loop
for (let fruit of fruits) {
  console.log(fruit);
}

// Higher-order methods
let squares = numbers.map(num => num * num);
console.log(squares); // [1,4,9,16,25]

let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2,4]

