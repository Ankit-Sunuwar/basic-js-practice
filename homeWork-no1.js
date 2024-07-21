const x = Number(prompt("Enter the number:"));
const y = Number(prompt("Enter the number:"));

const sum = a + b;
const sure = confirm("do you want to sum this two number?");

if (a === b) {
  const sum2 = (a + b) * 3;
  alert(
    `just you give the same number, your ans will be tripple of the number which is ${sum2}`
  );
} else {
  alert(`your sum is ${sum}`);
}
