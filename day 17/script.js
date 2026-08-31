// const num = Math.floor(Math.random() * 100); // 0 to 1

// console.log(num);

// RGB = primary color
// name, color code - hexadecimal - #
// rgb

// number system

// binary system - 0,1
// decimal system - 0 to 9,10,11,12...
// hexa decimal - 0 to 9, a,b,c,d,e,f

// 50 times

// to get html Element by id name - use document.getElementById("id name")
// to get html Element by tag name - use document.getElementsByTagName("tag name")
// to get html Element by class name - use document.getElementsByClassName("class name")
// to access body's style - document.body.style.backgroundColor = "red";

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const num = Math.floor(Math.random() * 16581375);
  const str = num.toString(16); // six digit color code
  document.body.style.backgroundColor = "#" + str;
  console.log("#" + str);
});

// every click new color by colors array

// every click new and random color in body background by color code
// default color should be - #ffffff
// button text content should be change on every click and become color code.

