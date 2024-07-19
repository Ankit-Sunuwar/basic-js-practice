// Operators
// 1. AND
// 2. OR
// 3. NOT

// 1. And (both condition must be true)
// condition1 && condition2
// true && true

// if (condition1 && condition2) {
//  // logic 1
//} else {
//  // else logic
// }

// 2. OR (any 1 condition must satisfy)
// condition1 || condition2

// 3. NOT (opposite value)

const isAdult = true;

if (!isAdult) {
  console.log("Your are watching cartoon");
} else {
  console.log("You are watching news");
}
