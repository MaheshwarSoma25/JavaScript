// let heading = document.getElementById("heading");
// console.dir(heading);

// let heading = document.getElementsByClassName("heading");
// console.dir(heading);

// let firtsEl = document.querySelector(".heading");
// console.dir(firtsEl);

// let allEl = document.querySelector(".heading");
// console.dir(allEl);

// let heading = document.querySelector("h1");
// console.dir(heading.innerText);

// heading.innerText = heading.innerText + " from Bunny";

// let newbtn = document.createElement("button");
// newbtn.innerText = "Click Me";
// newbtn.style.color = "white";
// newbtn.style.backgroundColor = "blue";

// document.querySelector("body").prepend(newbtn)

let para = document.querySelector("p")
para.setAttribute("class", "new-para")

// Change heading text
const heading = document.querySelector("title");
heading.innerText = "Welcome to DOM Manipulation!";
// Style the message
const msg = document.querySelector("message");
msg.style.color = "blue";
msg.style.fontWeight = "bold";
// Create and append a new list item
const ul = document.querySelector("list");
const li = document.createElement("li");
li.innerText = "New Item";
ul.appendChild(li);
// Remove box on click
const box = document.querySelector("box");
box.remove();