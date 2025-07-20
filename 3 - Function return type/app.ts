// Function Return Type

// function functionName(parameters: parameterType): returnType {
//   // Body of function
// }

function multiply(a: number, b: number): number {
  return a * b;
}
console.log(multiply(7, 2));

//Arrow function
const sum = (a: number, b: number): number => a + b;

//Good Practice
let combineFunction: (a: number, b: number) => number;
combineFunction = sum;
console.log(combineFunction(8, 19));

//Function Type and Callbacks
type CB = (n: number) => void; //optional if custom type use
function addHandle(num1: number, num2: number, cb: CB) {
  // function addHandle(num1: number, num2: number, cb: (n: number) => void) {
  const result = num1 + num2;
  cb(result);
}

addHandle(10, 20, (result: number) => console.log(result));

/*
 'never' Return Type in TypeScript

 Definition Points:
1. `never` means the function never returns normally.
2. It is used when a function always throws an error or runs forever.
3. Helps catch unreachable or unhandled code.
4. Ensures exhaustive checks in switch statements.
*/

//  Example 1: Function that always throws an error
function throwError(message: string): never {
  throw new Error(message); // This function never returns a value
}

//  Example 2: Function with infinite loop
function infiniteLoop(): never {
  while (true) {
    console.log("Looping forever..."); // This function never ends
  }
}

//  Example 3: Using never for exhaustive type checking
type Status = "loading" | "success" | "error";

function handleStatus(status: Status) {
  switch (status) {
    case "loading":
      console.log("Loading...");
      break;
    case "success":
      console.log("Success!");
      break;
    case "error":
      console.log("Error!");
      break;
    default:
      //  TypeScript checks that all possible cases are handled
      const unreachable: never = status; // If a new status is added, this line will throw a type error
  }
}
