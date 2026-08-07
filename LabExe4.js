//2 numbers being added together and the result being printed to the console
function add(a, b) {
    const result = a + b;
    console.log(result);
    return result;
}
//2 numbers being subtracted and the result being printed to the console
function subtract(a, b) {
    const result = a - b;
    console.log(result);
    return result;
}
//2 numbers being multiplied and the result being printed to the console
function multiply(a, b) {
    const result = a * b;
    console.log(result);
    return result;
}
//2 numbers being divided and the result being printed to the console
function divide(a, b) {
    const result = a / b;
    console.log(result);
    return result;     
}

//3 Unit tests
console.log(add(5, 3)); // Expected output: 8
console.log(add(0, 24)); // Expected output: 24
console.log(add(-5, 5)); // Expected output: 0 
console.log(add(2.5, 3.5)); // Expected output: 6







add(5, 3);
subtract(10, 4);
multiply(6, 7);
divide(20, 5);

function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alice");
greet("Bob");