"use strict";
// ................... INTERFACE in TypeScript...................
// Implementing interface with a class
class Customer {
    constructor(id, name, email, isPremium) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.isPremium = isPremium;
    }
    login() {
        console.log(` ${this.name} logged in with email ${this.email}`);
    }
}
// Using the class
const userX = new Customer(101, "Ajay Goswami", "ajay@example.com", true);
userX.login();
// ❌ Can't change readonly id
// userX.id = 200; // Error!
// Using interface for object shape
const user2 = {
    id: 102,
    name: "John",
    email: "john@example.com",
    login: () => {
        console.log(` John logged in!`);
    },
};
user2.login();
