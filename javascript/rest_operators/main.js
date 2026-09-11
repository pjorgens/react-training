// This feature was added in Javascript 2015 (ES6)

// Rest operators allow you to pass multiple undefined arguments to a function.
function test(firstArgument, secondArgument, ...otherArguments){
    console.log(firstArgument);
    console.log(secondArgument);
    console.log(otherArguments);
}

// Here we are calling the function with multiple rest operator arguments.
test("Peter", "Max", "Sarah", "Mitch");
