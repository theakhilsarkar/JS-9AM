// for loop = is used to run block of code multiple times.

// for(start; end; ++,--){

// }
//        1        2      4
// sum 1 to n.
const n = 5; // 15
let sum = 0;

for (let i = 1; i <= n; i++) {
  if (i % 2 == 1) {
    sum = sum + i;
  }
}

document.write(sum);

// find sum of only even number from 1 to n.

// wap to find sum of all digits of a number.
// ex. n = 123 ans = 1 + 2 + 3 = 6

// wap to find sum of first and last digits of a number.
// ex. n = 123, ans = 1 + 3 = 4

// wap to check number is palindrom or not.
// ex. n = 121 ans = this number is palindrom.

// wap to check number is magic or not.
// ex. n = 123, 1*2*3 == 1 + 2 + 3, 6 == 6

// num%10 -> last digit -> 123%10 -> 3
// num/10 -> last digit remove -> 123/10 -> Math.floor(12.3) -> 12
// num*10 -> last 0 add. -> 123*10 -> 1230
