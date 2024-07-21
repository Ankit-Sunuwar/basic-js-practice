/*
for
do while
while
*/

// For (Syntax)
//for(being; step condition; increase being step){
//  // code to be excuted
//}

// Write a js program for multiplication table
// const table = Number(prompt("Enter the number for table; 2"));
// // if(if (typeof table !== "number") {
// if (isNaN(table)) {
//   alert("You didn't enter the number");
// }
// for (let i = 1; i <= 10; i++) {
//   // i++ unary operator
//   // i=i+1
//   // i+=1
//   console.log(`${table}*${i}=${table * i}`);
// }

// do while

// // being step
// do{
//  // code execution
//  // increase being step
// }while(/*step condition*/)

// while loop

// begin step
//  while(/*step condition */)
//  // code execution
//  // increase begin step
// }

// do while

// const table = Number(prompt("Enter the number for table; 2"));
// if (isNaN(table)) {
//   alert("You didn't enter the number");
// }
// let i = 1;
// do {
//   console.log(`$(table) * $(i)=${table * i}`);
//   i++;
// } while (i <= 10);

// while loop
const table = Number(prompt("Enter the number for table"));
if (isNaN(table)) {
  alert("You didn't enter the number");
}
let i = 1;
while (i <= 10) {
  console.log(`${table} * ${i}= ${table * i}`);
  i++;
}
