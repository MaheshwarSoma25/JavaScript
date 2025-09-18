// Loops
// for loop
for (let i = 0; i < 3; i++) {
  console.log("Hello " + i);
}

// while loop
let count = 0;
while (count < 3) {
  console.log("Count is " + count);
  count++;
}

// do…while loop
let n = 0;
do {
  console.log("Number: " + n);
  n++;
} while (n < 2);

// for…of (iterating over a string)
for (let char of "JS") {
  console.log(char); // J S
}

// Strings
let text = "  JavaScript  ";
console.log(text.length);           // 13
console.log(text.trim());           // "JavaScript"
console.log(text.toUpperCase());    // "  JAVASCRIPT  "
console.log(text.slice(2, 6));      // "Java"
console.log(text.replace("Java", "Type")); // "  TypeScript  "

// Concatenation
let greeting = "Hello";
let name = "Bunny";
console.log(greeting + " " + name); // Hello Bunny
console.log(`${greeting} ${name}`); // Hello Bunny (template literal)
