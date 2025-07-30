// OVERRIDING Example

// Method Overriding means redefining a parent method in the child class.
// Car and ElectricScooter override the start() method with their own behaviors.
// This enables specific behavior while keeping a common structure from the base class.

class Vehicle {
  start(): void {
    console.log("Vehicle starting...");
  }
}

class Car extends Vehicle {
  override start(): void {
    console.log("Car is starting with a key...");
  }
}

class ElectricScooter extends Vehicle {
  override start(): void {
    console.log("Scooter starting with a button...");
  }
}

// Create instances
const v1 = new Car();
const v2 = new ElectricScooter();

v1.start(); // Car version
v2.start(); // Scooter version
