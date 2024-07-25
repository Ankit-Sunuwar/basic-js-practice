// // Objects

// // Complex Data Types

// // CRUD (Create, read, update, delete)
// // Create
// const person = {};

// const ankit = {
//   name: "Ankit sunuwar", // property (key and value pair)
//   dob: "2020-02-20",
//   gender: "m",
//   hasValidLicense: true,
//   phone: {
//     home: 9818881185,
//     office: 9866334329,
//   },
//   age: function age() {
//     return 2024 - Number(this.dob.split("-")[0]);
//   },
//   newAge: () => {
//     return 2024 - Number(ankit.dob.split("-")[0]);
//   },
// };

// // Read
// // Property
// console.log(ankit.name, ankit.gender);

// // Method
// console.log(ankit.age());
// console.log(ankit.newAge());

// // Update

// ankit.name = "Ankit Sunuwar";
// console.log({ ankit });

// // Delect

// // delect ankit.newAge;

// // Spread Operator

// const { newAge, ...rest } = ankit;
// console.log({ rest });

// // Immutable JS (object / array)

// let prod = {
//   name: "headphone",
//   price: 83.7,
//   discount: "7%",
// };

const { ...newProd } = prod;

if (newProd.price < 100) {
  const newPrice = newProd.price - (newProd.price * 7) / 100;
  newProd.price = `${newPrice}`;
} else {
  const newPrice = newProd.price - (newProd.price * 10) / 100;
  newProd.price = `${newPrice}`;
}
console.log(newProd);
