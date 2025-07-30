// ..................TYPESCRIPT CLASS......................

/*
What is a Class?
A class is a blueprint for creating reusable objects.
It lets you group related variables (called properties) and functions (called methods) together.

Real-life Use Case:
Imagine you're building an eCommerce website.
You need to manage different products: name, price, stock.

Using a class, you can create reusable product objects.
*/

//  Defining a Product class
class Product {
  //  Properties / Fields
  name: string; // Product name (text)
  price: number; // Product price (number)
  stock: number; // Number of items in stock

  //   Constructor: The constructor is a special function that runs
  //   when we create (instantiate) an object using the class.
  //   It assigns values to the class properties.
  constructor(name: string, price: number, stock: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  //   Method: A method is a function inside a class.
  //   This method prints product info to the console.
  displayDetails(): void {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ₹${this.price}`);
    console.log(`In Stock: ${this.stock} units`);
  }

  //  Method: Update stock quantity
  updateStock(quantity: number): void {
    this.stock += quantity;
    console.log(` Stock updated! New stock: ${this.stock}`);
  }
}

// We're now using the Product class to create an object and call its methods.
const laptop = new Product("Dell Inspiron", 60000, 10);

laptop.displayDetails(); // Show initial details
laptop.updateStock(5); // Add 5 more items to stock
laptop.displayDetails(); // Show updated details

// ..........................KEY DEFINITIONS FOR QUICK REFERENCE........................
/*
class: Defines a blueprint to create objects with shared structure and behavior.

property: A variable inside a class (e.g., name, price).

method: A function inside a class (e.g., displayDetails()).

constructor: A special method that runs when the object is created using 'new'.

this: Refers to the current instance of the class.

object: An actual instance created from a class using the `new` keyword.
    Example: const laptop = new Product(...)

type annotations: Ensure the correct data type for each property (e.g., string, number).

returnType: Declares what a function or method will return (void = returns nothing).
*/

/*
Create a 'User' class with:
- Properties: name (string), age (number), isOnline (boolean)
- Methods: login(), logout(), showProfile()
*/

class User {
  name: string;
  age: number;
  isOnline: boolean;
  constructor(name: string, age: number, isOnline: boolean) {
    this.name = name;
    this.age = age;
    this.isOnline = isOnline;
  }
  login() {
    console.log(`${this.name} logged in`);
  }
  logout() {
    console.log(`${this.name} logged out`);
  }
  showProfile() {
    console.log(`${this.name}'s age: ${this.age}`);
    console.log(`${this.name} is ${this.isOnline ? "online" : "offline"}`);
  }
}

const user1 = new User("Ajay", 23, true);
user1.login();
user1.showProfile();
user1.logout();
