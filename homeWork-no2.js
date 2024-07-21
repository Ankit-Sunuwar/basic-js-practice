const number = prompt("Enter the number:");

if (number % 3 === 0 || number % 7 === 0) {
  console.log(`${number} is a multiple of 3 or 7.`);
} else {
  console.log(`${number} is not a multiple of 3 or 7.`);
}
