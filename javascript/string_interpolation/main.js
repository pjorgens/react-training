// In Javascript, you must use backticks for string interpolation ``.
const firstName = "John";
const greeting = `Hello ${firstName}`;

// You cannot use double or single quotes.
const greeting2 = "Hello ${firstName}";

console.log(greeting);
console.log(greeting2);

const a = 10;
const b = 20;
const desc = `The sum of ${a} and ${b} is ${a + b}`

// When interpolating you are accessing the data directly.
// You can perform operations during interpolation.
console.log(desc)


const user = {
    name: "Alice",
    age: 30,
    city: "Wonderland"
}

// You can use backticks for printing multiline strings
const multilineString = `User information:
Name: ${user.name}
Age: ${user.age}
City: ${user.city}
`

console.log(multilineString);
