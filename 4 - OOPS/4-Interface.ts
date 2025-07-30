// ................... INTERFACE in TypeScript...................

// An interface defines the structure (shape) of an object or class.
// It does NOT contain any logic, just declarations.

// Benefits:
// - Helps with code consistency
// - Useful in APIs, classes, function parameters
// - Supports optional (?) and readonly fields

// ....... Interface Declaration.......
interface IUser {
  readonly id: number; // Read-only: can't change after creation
  name: string;
  email: string;
  isPremium?: boolean; // Optional: may or may not be present

  login(): void; // Must implement this method
}

// Implementing interface with a class
class Customer implements IUser {
  readonly id: number;
  name: string;
  email: string;
  isPremium?: boolean;

  constructor(id: number, name: string, email: string, isPremium?: boolean) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isPremium = isPremium;
  }

  login(): void {
    console.log(` ${this.name} logged in with email ${this.email}`);
  }
}

// Using the class
const userX = new Customer(101, "Ajay Goswami", "ajay@example.com", true);
userX.login();

// ❌ Can't change readonly id
// userX.id = 200; // Error!

// Using interface for object shape
const user2: IUser = {
  id: 102,
  name: "John",
  email: "john@example.com",
  login: () => {
    console.log(` John logged in!`);
  },
};

user2.login();
