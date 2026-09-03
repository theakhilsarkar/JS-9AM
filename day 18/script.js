// random colors code 1,65L
// ui + color code button
// #ffffff -> #aa44ff

// 01 02 03 04 05 06 07 08 09 10 11 12

// html id,class,tag

// querySelector

// const signinButton = document.querySelector("#signin-btn");
// const signupButton = document.querySelectorAll(".signup-btn");

// signinButton.addEventListener("click", () => {
//   alert("button tapped !");
// });

// const stu = [
//   {
//     name: "aman",
//   },
//   {
//     name: "chaman",
//   },
// ];

// console.log(signupButton[0].textContent);
// console.log(signupButton[1].textContent);
// console.log(stu[0].name);

// DOM - Document Object Model

const container = document.querySelector("#container");
const box = document.querySelector(".box");

container.innerHTML = ""; // to modify whole inner html content of any element.
// container.appendChild(); // to insert new element inside any element.
const div = document.createElement("div"); // <div></div>
div.textContent = "hello text..."; // <div>hello text<div>
const h1 = document.createElement("h1"); // we can create new html element by name.
h1.textContent = "heading 1";
const img = document.createElement("img");
img.height = "300";
img.src =
  "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D";
container.appendChild(div);
container.appendChild(h1);
container.appendChild(img);

const input = document.getElementById("name");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  alert(input.value); // to fetch value from input field, user .value property.
});

