// Step 1: Create an abstract class to define a blueprint for shape-related operations
abstract class Shape {
    // Abstract method: Must be implemented by derived classes
    abstract calculateArea(): number;

    // Non-abstract method: Shared functionality across subclasses
    describe(): void {
        console.log("This is a shape.");
    }
}

// Step 2: Create a subclass for a rectangle
class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super(); // Call the parent class constructor
        this.width = width;
        this.height = height;
    }

    // Implement the abstract method
    calculateArea(): number {
        return this.width * this.height;
    }
}

// Step 3: Create a subclass for a circle
class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super(); // Call the parent class constructor
        this.radius = radius;
    }

    // Implement the abstract method
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Step 4: Use the subclasses through their common abstraction
function printShapeArea(shape: Shape): void {
    shape.describe(); // Call the shared method from the parent class
    console.log(`Area: ${shape.calculateArea()}`); // Call the implemented method
}

// Step 5: Create instances of the subclasses
const rectangle = new Rectangle(10, 5); // Rectangle with width 10 and height 5
const circle = new Circle(7); // Circle with radius 7

// Step 6: Use the function to interact with the shapes
console.log("Rectangle:");
printShapeArea(rectangle); // Output the area of the rectangle

console.log("\nCircle:");
printShapeArea(circle); // Output the area of the circle
