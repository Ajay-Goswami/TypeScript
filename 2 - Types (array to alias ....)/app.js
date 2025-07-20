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
var age = 25;
var price = 99.99;
// 2. string
var fname = "Ajay";
var greeting = "Hello, ".concat(fname);
// 3. boolean
var isActive = true;
var hasPaid = false;
// 4. null and undefined
// null represents an explicitly empty value, while undefined means a variable has been declared but not assigned a value.
var emptyValue = null;
var notAssigned = undefined;
// 5. any (use with caution — disables type checking)
//any disables type checking, allowing a variable to hold any type of value.
var randomData = "hello";
randomData = 123;
randomData = true;
// 6. unknown (safer than any — needs type check)
// unknown is a safer alternative to any that requires type checking before use.
var inputValue = "Ajay";
if (typeof inputValue === "string") {
    console.log(inputValue.toUpperCase());
}
// 7. Object, Array, Nested Object
// Object
// Object is a collection of key-value pairs
// It is defined using curly braces {}
// It can contain properties of different types
// It is used to represent real-world entities
var person = {
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
var languages;
languages = ["Hindi", "English"];
var languages2; // with the use of any[], we can define all types but lose the ts properties - so avoid it
languages2 = ["Hindi", 24, true];
// 9. Tuple
// Tuple is a special type of array that can hold a fixed number of elements with different types
// It is defined using square brackets [] with types of each element
var tuple = ["TypeScript", 1, true];
console.log("Tuple: ", tuple);
// 10. Enum
// Enum is a special "class" that represents a group of constants (unchangeable variables)
// It is used to define a set of named constants
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = -1] = "Down";
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Right"] = 2] = "Right";
})(Direction || (Direction = {}));
console.log("Enum: ", Direction.Up);
var size = "medium";
console.log("Literal Type: ", size);
// 12. Union Type
// Union Type is used to define a variable that can hold multiple types
// It is defined using the pipe (|) operator
var unionType;
unionType = "TypeScript Union";
console.log("Union Type: ", unionType);
unionType = 42;
console.log("Union Type: ", unionType);
var userContact = {
    name: "John Doe",
    age: 30,
    email: "KtDyM@example.com",
    phone: "123-456-7890",
};
console.log("Intersection Type: ", userContact);
function drawShape(shape, position) {
    console.log("Drawing a ".concat(shape, " at (").concat(position.x, ", ").concat(position.y, ")"));
}
drawShape("circle", { x: 10, y: 20 });
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var car = {
    year: carYear,
    type: carType,
    model: carModel,
};
console.log("Type Alias for Car: ", car);
