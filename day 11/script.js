// function funname(){
//     // code here...
// }

// refference / value;
// anonymas not for call, its for pass.
// (){

// }

//

// function math(sum, sub) {
//   sum(30, 40);
//   sub(45, 13);
// }

// math(
//   function (a, b) {
//     console.log(a + b);
//   },
//   (a, b) => {
//     console.log(a - b);
//   },
// );

// store function in a variable directly by arrow function.

// const sum = (a, b) => {
//   console.log(a + b);
// };

// sum(30, 40);

// const sum = (a, b) => {
//   return a + b;
// };
// // const ans = sum(20, 30);
// console.log(sum);
// console.log(sum(30, 50));

// function only name -> no call, function reff.
// function name() -> call, execute
// function , =>
// arrow
// single line code
// return value code.
// const cube = (x) => x * x * x;
// const mult = (a, b) => a * b;

// const ans = mult(3, 4);
// console.log(ans);

// const math = (a, b) => {
//   const sum = (a, b) => a + b;
//   return sum;
// };

// math(10, 20);

// const math = () => {
//   return (a, b) => a + b;
// };

// const sum = math();
// const ans = sum(20, 30);
// console.log(ans);

// when we call function into another function. its called nested function
// when we call function into same function. recursion == loop
