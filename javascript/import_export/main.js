// When a 'default' function is imported, you can set an alias right away.
// In this case we have set an alias of 'sum' to the imported function 'add'.
import add from "./math.js";

// To set an alias for a 'named import', you must specify the alias using the 'as' term.
import {multiply as mul} from "./math.js";

// Print the output of 'add'.
console.log(add(2,4));

// Print the output of 'multiply'
console.log(mul(6,10));

// You can also import all functions using the * wildcard.
import * as math from "./math.js";

// Print the output of 
console.log(math.multiply(10,11));
