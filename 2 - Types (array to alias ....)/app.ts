/*
Basic TypeScript Types:
1. number
2. string
3. boolean
4. null and undefined
5. any
6. unknown
7. object
8. array
9. tuple
10. enum
11. literal type 
12. union type
13. intersection type
14. type alias
*/

// 1. number
let age: number = 25;
let price: number = 99.99;

// 2. string
let fname: string = "Ajay";
let greeting: string = `Hello, ${fname}`;

// 3. boolean
let isActive: boolean = true;
let hasPaid: boolean = false;

// 4. null and undefined
// null represents an explicitly empty value, while undefined means a variable has been declared but not assigned a value.
let emptyValue: null = null;
let notAssigned: undefined = undefined;

// 5. any (use with caution — disables type checking)
//any disables type checking, allowing a variable to hold any type of value.
let randomData: any = "hello";
randomData = 123;
randomData = true;

// 6. unknown (safer than any — needs type check)
// unknown is a safer alternative to any that requires type checking before use.
let inputValue: unknown = "Ajay";
if (typeof inputValue === "string") {
  console.log(inputValue.toUpperCase());
}

// 7. Object, Array, Nested Object
// Object
// Object is a collection of key-value pairs
// It is defined using curly braces {}
// It can contain properties of different types
// It is used to represent real-world entities
const person: {
  name: string;
  version: number;
  isLive: boolean;
  skills: string[];
  address: {
    city: string;
    country: string;
  };
} = {
  name: "TypeScript Object Name",
  version: 1.0,
  isLive: true,
  skills: ["JavaScript", "TypeScript", "React"],
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

console.log("Object: ", person);

//console.log(obj.age); // Error: Property 'age' does not exist on type '{ name: string; version: number; isLive: boolean; }' but in js it does not throw error and print undefined

// 8. Array
// Array is a collection of elements of the same type
let languages: string[];
languages = ["Hindi", "English"];

let languages2: any[]; // with the use of any[], we can define all types but lose the ts properties - so avoid it
languages2 = ["Hindi", 24, true];

// 9. Tuple
// Tuple is a special type of array that can hold a fixed number of elements with different types
// It is defined using square brackets [] with types of each element
const tuple: [string, number, boolean] = ["TypeScript", 1, true];
console.log("Tuple: ", tuple);

// 10. Enum
// Enum is a special "class" that represents a group of constants (unchangeable variables)
// It is used to define a set of named constants
enum Direction {
  Up = 1,
  Down = -1,
  Left = 0,
  Right = 2,
}
console.log("Enum: ", Direction.Up);

// 11. Literal Type
// Literal Type is used to define a type that can only take on a specific value or set of values
// It can be used with strings, numbers, booleans, etc.
type Size = "small" | "medium" | "large";
const size: Size = "medium";
console.log("Literal Type: ", size);

// 12. Union Type
// Union Type is used to define a variable that can hold multiple types
// It is defined using the pipe (|) operator
let unionType: string | number;
unionType = "TypeScript Union";
console.log("Union Type: ", unionType);

unionType = 42;
console.log("Union Type: ", unionType);

// 13. Intersection Type
// Intersection Type is used to combine multiple types into one
// It can be used to create a new type that has all the properties of the combined types
type User = {
  name: string;
  age: number;
};
type Contact = {
  email: string;
  phone: string;
};
type UserContact = User & Contact;
const userContact: UserContact = {
  name: "John Doe",
  age: 30,
  email: "KtDyM@example.com",
  phone: "123-456-7890",
};
console.log("Intersection Type: ", userContact);

// 14. Type Alias | Custom Type
// Type Alias is used to create a new name for a type
// It can be used for objects, arrays, tuples, etc.

// Example 1:
type Point = {
  x: number;
  y: number;
};

type Shape = "circle" | "square" | "rectangle";

function drawShape(shape: Shape, position: Point): void {
  console.log(`Drawing a ${shape} at (${position.x}, ${position.y})`);
}

drawShape("circle", { x: 10, y: 20 });

// Example 2: Type Alias for Function
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};
console.log("Type Alias for Car: ", car);
