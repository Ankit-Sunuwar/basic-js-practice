// Write a js program to create sum calculator using interaction.

// alert
alert("Welcome to calculator");

// prompt
const firstnum = parseFloat(prompt("Enter the first num:"));
const secnum = parseFloat(prompt("Enter the second num:"));

// confirm
const sure = confirm("You want to add this two num?");

// adding two number
const sum = firstnum + secnum;

console.log(sum); // printing the sum of two number

alert(`The sum is ${sum}`);
