// Write a js program to create sum calculator using interaction.

// alert
alert("Welcome to calculator");

// prompt
const firstnum = parseFloat(prompt("Enter the first num:"));
const secnum = parseFloat(prompt("Enter the second num:"));
const thirdnum = parseInt(prompt("Enter the third num:"));

// confirm
const sure = confirm("You want to add this three num?");

// adding two number
const sum = firstnum + secnum + thirdnum;

console.log(sum); // printing the sum of two number

alert(`The sum is ${sum}`);
