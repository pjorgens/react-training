// In JavaScript, you can call a function before you declare it.
test();

// Here is the declaration. Declaration is also called 'initialization'.
function test() {}

// This does not work for arrow functions. If you uncomment this it will fail.
// test2();

// Here is the arrow function declaration.
const test2 = () => {
    console.log("Hello, JS!");
}

// Arrow functions work after the declaration.
test2();


