// ARRAY -
// array is collection of multiple values of same datatype.
// array is one type of variable which can store multiple values.
// we can access element(value) of array by index number which start from 0.

// how to create array in js.
// to declare array we have to use [] to group multiple values.

// undefined - not defined/

// const arr = [1,2,45,12];

// console.log(arr[0]); --> 1
// console.log(arr[1]); --> 2
// console.log(arr[2]);
// console.log(arr[3]); --> 12
// console.log(arr[4]); --> undefined

// for (let i = 0; i <= 3; i++) {
//   console.log(arr[i]);
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr[3] = 40;
// arr[4] = 50;
// arr[5] = 60; // its process to insert value in the array.

// arr.push(70, 20, 40); // push is used to insert value at last of the arrray.
// arr.pop(); // pop is used to remove last values of array.

// console.log(arr);

// wap to print array using loop.
// wap to print array in reverse order using loop.
// wap to find sum of all elements of array.
// wap to print only even numbers of array.
// wap to find max value from the array.

// wap to find sum of all elements of array.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 55

function sumOfArray(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}

const ans = sumOfArray(nums);
console.log(ans);

const a = [1, 2, 3, 4, 5];

const newAns = sumOfArray([1, 2, 3, 4, 5]);
console.log(newAns);
