// forEach:void vs map:array

// wap to find sum of all element of array.
// let sum = 0;
// arr.forEach((e) => {
//   sum += e;
// });

// wap to multiple all elements of array by 2.
// arr = arr.map((e) => {
//   return e * 2;
// });
// console.log(arr);

let arr = [5, 3, 1, 6, 7, 9, 2];

const findMax = (arr) => {
  let max = arr[0]; // max = 5
  arr.forEach((e) => {
    if (max > e) {
      // (9<2:false)
      max = e; // max = 9
    }
  });
  return max; // return 9;
};
// 1 -call
const ans = findMax(arr);
console.log(ans);

// wap to find minimum from the whole array.
