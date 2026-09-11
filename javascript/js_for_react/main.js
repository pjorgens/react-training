function main() {
    // To print to the console in Javascript use 'console.log()'.
    console.log("test");

    // Using 'var' gives the variable 'function scope' to the main() function.
    // var x = 10;

    // Using 'const' prevents overridding the variable 'x'. When uncommented this will cause an error.
    // const x = 5;

    // Using 'let' gives the variable 'block scope' so it is localized to the current block.
    let x = 10;
    
    // Here we can see 'let' localizes the variable to the if() block.
    if (true) {
        let x = 20;
        x = 30;
    }

    // The scope when using 'const' is also localized to the if() statement.
    if (true) {
        const x = 40;
    }

    // The x=10 from main() is printed, since the if() statement was out of scope.
    console.log(x);

    // When using const, you cannot change a variable. But you CAN change its keys, as we see here.
    const book = {title:"Hello, World!"};
    book.title = "Hello, Javascript!";
    console.log(book);

    // For example, this will cause an error as here we tried to change the variable, not the keys.
    // book = {title:"Hello, React!"};
    // console.log(book);

    // If you want the keys to be immutable, then you can use 'Object.freeze'.
    const book2 = Object.freeze({title:"Hello, World!"});
    book2.title = "Hello, React!";
    console.log(book2) // It won't throw an error, but it also won't affect the keys when frozen.
}

main();
