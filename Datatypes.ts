// Basic Types
let num: number = 42;               // A number type variable
let str: string = "Hello, TypeScript!"; // A string type variable
let bool: boolean = true;           // A boolean type variable
let nothing: null = null;           // A variable with null value
let notDefined: undefined = undefined; // A variable with undefined value

// Arrays
export let numbers: number[] = [1, 2, 3, 4]; // Array of numbers
let strings: Array<string> = ["a", "b", "c"]; // Array of strings using generic syntax

// Tuple
let tuple: [number, string] = [1, "one"]; // A tuple containing a number and a string

// Enum
enum Direction {                     // Enum for a set of named constants
    Up,
    Down,
    Left,
    Right
}
let dir: Direction = Direction.Up;  // Using an enum value

// Any
let randomValue: any = 42;           // A variable that can hold any type
randomValue = "Now a string";       // Now it’s a string
randomValue = true;                 // Now it’s a boolean

// Void
function logMessage1(message: string): void {
    // A function that returns nothing (void)
    console.log(message);
}
logMessage1("This function returns nothing!");

// Never
function throwError(message: string): never {
    // A function that never returns (throws an error)
    throw new Error(message);
}

// Object
let person: { name: string; age: number } = {
    // An object with a specific shape (name and age)
    name: "Alice",
    age: 25
};

// Union
let multiType: number | string = 20; // A variable that can be a number or a string
multiType = "Now I'm a string";      // Now it’s a string

// Intersection
type Admin = { name: string; privileges: string[] }; // An admin type
type Employee = { name: string; startDate: Date };  // An employee type
type ElevatedEmployee = Admin & Employee;          // An intersection of Admin and Employee

let elevatedEmployee: ElevatedEmployee = {
    name: "Bob",
    privileges: ["create-server"],
    startDate: new Date()
};

// Literal Types
let exactValue: "yes" | "no" = "yes"; // A variable that can only hold specific string values

// Function
let add: (a: number, b: number) => number; // Function type declaration
add = (a, b) => a + b;                     // Implementation of the function

// Type Assertions
let unknownValue: unknown = "This is a string"; // A variable with unknown type
let stringLength: number = (unknownValue as string).length; // Type assertion to treat it as a string

// Unknown
let unsure: unknown = 4;                 // Unknown type is safer than `any`
if (typeof unsure === "number") {
    console.log(unsure + 2); // Safe to use as a number after type check
}

// BigInt
// let bigNumber: bigint = BigInt("1234567890123456789012345678901234567890"); // BigInt for very large numbers

// // Symbol
// let uniqueSymbol: symbol = Symbol("unique"); // Symbol for creating unique identifiers

// Generics
function identity<T>(value: T): T {
    // A generic function that works with any type
    return value;
}
let result = identity<number>(5); // Using generics with a specific type
//ternary Operator
console.log(10>20?1:2);
