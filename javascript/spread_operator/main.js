// Define two arrays.
const fruits = ["apple", "banana"];
const moreFruits = ["cherry", "melon"];

// You cannot modify an array in React like you would in JavaScript.
// In React state is immutable. If you want to modify an array let's say,
// instead you must create a new array and append to it using the old array.
// To do that we use the (...) spread operator.
const newArray = [...fruits, "orange"];
console.log(newArray);

// With the spread operator, you can also merge two arrays.
const allFruits = [...fruits, ...moreFruits];
console.log(allFruits);
