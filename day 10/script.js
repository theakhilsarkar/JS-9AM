// function : reuseable block of code to perform specific task.
// function execute when we call it.
// we can call same function multiple times.
// if we have to pass value from outside the function, we have to create parameter and pass argument while calling it.

// function - process handle
// task : input(parameter) -> process(function) -> output(return)

// return keyword used to return a value from the function to where it called.
// we can return only one value at a time.

// function sum(a, b) {
//   return a + b;
// }

// const ans = sum(30, 50);
// console.log("sum is " + ans);
// console.log("addition is " + ans);

// block scope

// const x = 40; // x is withing global block of scope.
// console.log(x);

// {
//   const a = 10; // a only accessible within same block.
//   console.log(a);
// }

// {
//   const b = 30;
//   console.log(b);
//   const a = 100;
//   console.log(a);
//   console.log(x);
// }

function isMagic(num) {
  let sum = 0;
  let mult = 1;

  while (num > 0) {
    const ld = num % 10;
    sum = sum + ld;
    mult = mult * ld;
    num = Math.floor(num / 10);
  }

  if (sum == mult) {
    return true;
  } else {
    return false;
  }
}

const ans = isMagic(121);

if (ans) {
  console.log("num is magic !");
} else {
  console.log("num is not magic !");
}
