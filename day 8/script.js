// wap to find sum of all digits of a number.

// let num = 1324; // 10
// let sum = 0;

//c-1: 1324>0:true->
//c-2: 132>0:true->
//c-3: 13>0:true->
//c-4: 1>0:true->
//c-5: 0>0:false X
// while (num > 0) {
// ld = 1324 % 10 = 4
// ld = 132 % 10 = 2
// ld = 13 % 10 = 3
// ld = 1 % 10 = 1
//   const ld = num % 10;
// sum = 0 + 4 = 4
// sum = 4 + 2 = 6
// sum = 6 + 3 = 9
// sum = 9 + 1 = 10
//   sum = sum + ld;
// num = 1324/10 = 132.4 = 132
// num = 132/10 = 13.2 = 13
// num = 13/10 = 1.3 = 1
// num = 1/10 = 0.1 = 0
//   num = Math.floor(num / 10);
// }

// wap to find sum of first and last digits of a number.

// let num = 1234; // 5
// const ld = num % 10;
// let fd = 0;

// while (num > 0) {
//   fd = num % 10;
//   num = Math.floor(num / 10);
// }
// console.log(fd + ld);
