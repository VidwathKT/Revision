// Parent class: Vehicle
class Vehicle {
    public color: string;
    protected maxSpeed: number;

    constructor(color: string, maxSpeed: number) {
        this.color = color;
        this.maxSpeed = maxSpeed;
    }

    start(): void {
        console.log("Vehicle started");
    }

    stop(): void {
        console.log("Vehicle stopped");
    }
}

// Child class: Car
class Car extends Vehicle {
    private numberOfDoors: number;

    constructor(color: string, maxSpeed: number, numberOfDoors: number) {
        super(color, maxSpeed); // Call the parent class's constructor
        this.numberOfDoors = numberOfDoors;
    }

    honk(): void {
        console.log("Car honked");
    }
}

// Create a Car object
const myCar = new Car("red", 200, 4);
myCar.start(); // Inherited from Vehicle
myCar.honk(); // Specific to Car
console.log(myCar.color); // Inherited from Vehicle