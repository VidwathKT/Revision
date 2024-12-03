// 1. Named Function
function add1(a: number, b: number): number {
    // A function with a name and explicit parameter types and return type
    return a + b;
}
console.log(add1(5, 3)); // Output: 8

// 2. Anonymous Function
let multiply = function (a: number, b: number): number {
    // A function without a name, assigned to a variable
    return a * b;
};
console.log(multiply(4, 2)); // Output: 8

// 3. Arrow Function
let subtract = (a: number, b: number): number => {
    // A concise way to define functions using the arrow syntax
    return a - b;
};
console.log(subtract(10, 3)); // Output: 7

// 4. Function with Optional Parameters
function greet(name: string, age?: number): string {
    // `age` is optional, denoted by `?`
    if (age) {
        return `Hello ${name}, you are ${age} years old.`;
    }
    return `Hello ${name}.`;
}
console.log(greet("Alice")); // Output: Hello Alice.
console.log(greet("Bob", 25)); // Output: Hello Bob, you are 25 years old.

// 5. Function with Default Parameters
function greetWithDefault(name: string, age: number = 18): string {
    // `age` has a default value
    return `Hello ${name}, you are ${age} years old.`;
}
console.log(greetWithDefault("Charlie")); // Output: Hello Charlie, you are 18 years old.
console.log(greetWithDefault("David", 30)); // Output: Hello David, you are 30 years old.

// 6. Rest Parameters
function sumAll(...numbers: number[]): number {
    // Accepts any number of arguments as an array
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

// 7. Function Overloading
function display(value: number): string; // Overload signature 1
function display(value: string): string; // Overload signature 2
function display(value: number | string): string {
    // Implementation handles both types
    if (typeof value === "number") {
        return `The number is ${value}`;
    }
    return `The string is "${value}"`;
}
console.log(display(42)); // Output: The number is 42
console.log(display("Hello")); // Output: The string is "Hello"

// 8. Recursive Function
function factorial(n: number): number {
    // A function that calls itself
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// 9. Generator Function
function* numberGenerator(): Generator<number> {
    // A generator function using `function*` syntax
    yield 1;
    yield 2;
    yield 3;
}
let gen = numberGenerator();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3

// 10. Async Function
async function fetchData(): Promise<string> {
    // An asynchronous function that uses `async` and `await`
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched!"), 1000);
    });
}
fetchData().then(console.log); // Output: Data fetched! (after 1 second)

// 11. Void Function
function logMessage(message: string): void {
    // A function that does not return a value
    console.log(message);
}
logMessage("This is a void function."); // Output: This is a void function.

// 12. Function with Union Return Type
function parseInput(input: string | number): string | number {
    // A function that can return either a string or a number
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    return input * 2;
}
console.log(parseInput("hello")); // Output: HELLO
console.log(parseInput(10)); // Output: 20
