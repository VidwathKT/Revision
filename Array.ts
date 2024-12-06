// Array Creation
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["Apple", "Banana", "Cherry"];
let fruits1: string[] = ["Pomogranate", "Orange", "Chiku"];

// Accessing Elements
console.log(numbers[0]); // Output: 1
console.log(fruits[2]); // Output: Cherry

// Modifying Elements
numbers[1] = 10;
console.log(numbers); // Output: [1, 10, 3, 4, 5]

// Array Length
console.log(numbers.length); // Output: 5

// Array Methods

// 1. push() - Adds one or more elements to the end of an array
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

// 2. pop() - Removes the last element from an array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// 3. shift() - Removes the first element from an array
numbers.shift();
console.log(numbers); // Output: [10, 3, 4, 5]

// 4. unshift() - Adds one or more elements to the beginning of an array
numbers.unshift(0);
console.log(numbers); // Output: [0, 10, 3, 4, 5]

// 5. slice() - Extracts a section of an array and returns a new array
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ["Banana", "Cherry"]

// 6. splice() - Removes or replaces elements from an array
fruits.splice(1, 1, "Dragonfruit");
console.log(fruits); // Output: ["Apple", "Dragonfruit", "Cherry"]

// 7. concat() - Merges two or more arrays
let combinedArray = fruits.concat(fruits1);
console.log(combinedArray); // Output: ["Apple", "Dragonfruit", "Cherry","Pomogranate", "Orange", "Chiku"]

// 8. join() - Joins all elements of an array into a string
let joinedString = fruits.join(", ");
console.log(joinedString); // Output: Apple, Dragonfruit, Cherry

// 9. indexOf() - Returns the index of the first occurrence of an element
let index = fruits.indexOf("Cherry");
console.log(index); // Output: 2

// 10. lastIndexOf() - Returns the index of the last occurrence of an element
let lastIndex = fruits.lastIndexOf("Cherry");
console.log(lastIndex); // Output: 2

// 11. includes() - Checks if an element exists in an array
let includesCherry = fruits.includes("Cherry");
console.log(includesCherry); // Output: true

// 12. reverse() - Reverses the order of elements in an array
fruits.reverse();
console.log(fruits); // Output: ["Cherry", "Dragonfruit", "Apple"]

// 13. sort() - Sorts the elements of an array
numbers.sort();
console.log(numbers); // Output: [0, 3, 4, 5, 10]

// 14. forEach() - Executes a provided function once for each array element
fruits.forEach(fruit => console.log(fruit));

// 15. map() - Creates a new array by transforming each element of the original array
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [0, 6, 8, 10, 20]

// 16. filter() - Creates a new array with elements that pass a test
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [0, 10]

// 17. reduce() - Reduces an array to a single value
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 28