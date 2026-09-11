// Define a function
const addTraditional = function (a,b) {
    return a+b;
}

// Add the two parameters 'the old fashioned way' by calling the function
console.log(addTraditional(1,2));

// Add the two parameters using a one-liner arrow function, less syntax!
const addArrow = (a, b) => a + b;

// Print the output of the arrow function
console.log(addArrow(2,2));

// You can have multiple lines of code in an arrow function by using the braces
const addArrowWithBraces = (a, b) => {
    console.log("Starting sum");
    console.log(a + b);
}

// Print the output
addArrowWithBraces(3, 2);

// You can define an arrow function without parameters
const test = () => { console.log("test1"); console.log("test2"); }

// Print the output
test();


// You typically use arrow functions for one-liner or short lines code
// Here's a more realistic example
const ids = [1, 2, 3, 4, 5];

ids.forEach((id) => {
    id++;
    console.log(id);
});
