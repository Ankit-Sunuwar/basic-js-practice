// function is the "bulding block" of any program.
// 2 Core principles
// a. DRY (Dont repeat yourself)
// b. SoC (Separation of Concern)

// 2 ways to write function
//ES5

// Write a sum function for adding 2 numbers

// function declare
// a,b are the parameter
// function sum(a, b) {
//   //logic
//   const c = a + b;
//   return c;
// }

// // function call/execute
// const result = sum(2, 3);

// console.log({ result });

// write a js function for finding square of a number
// 2 => 4
// 4 => 16

// function square(a) {
//   const z = a * a;
//   return z;
// }

// const result = square(2, 2);
// console.log({ result });

//ES6

const square = (x) => {
  return x * x;
};

const num = Number(prompt("Enter the number:"));
const newAnswer = square(num);
console.log({ newAnswer });
