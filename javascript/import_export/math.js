// To use this function in another file, use the 'export' flag in the definition.
// Here we have set this as the 'default' function for importing.
export default function sum(x,y) {
    return x + y;
}

// You can only export one default function. 
export function multiply(x,y) {
    return x*y;
}

