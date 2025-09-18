// Arithmetic Operators
let a = 10, b = 5;
console.log("a + b =",a + b); // Output: 15
console.log("a + b =",a - b); // Output: 5
console.log("a + b =",a * b); // Output: 50
console.log("a + b =",a / b); // Output: 2

// Comparison Operators
console.log("a > b =",a > b);  // Output: true
console.log("a == '10' =",a == "10"); // Output: true
console.log("a === '10' =",a === "10"); // Output: false

// Logical Operators
let x = true, y = false;
console.log("x && y =",x && y); // Output: false
console.log("x || y =",x || y); // Output: true
console.log("!x =",!x);     // Output: false

// Conditional Statements
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else if (a === b) {
  console.log(`${a} equals ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}

