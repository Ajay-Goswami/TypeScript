// Function Return Type
// function functionName(parameters: parameterType): returnType {
//   // Body of function
// }
function multiply(a, b) {
    return a * b;
}
console.log(multiply(7, 2));
//Arrow function
var sum = function (a, b) { return a + b; };
//Good Practice
var combineFunction;
combineFunction = sum;
console.log(combineFunction(8, 19));
function addHandle(num1, num2, cb) {
    // function addHandle(num1: number, num2: number, cb: (n: number) => void) {
    var result = num1 + num2;
    cb(result);
}
addHandle(10, 20, function (result) { return console.log(result); });
/*
 'never' Return Type in TypeScript

 Definition Points:
1. `never` means the function never returns normally.
2. It is used when a function always throws an error or runs forever.
3. Helps catch unreachable or unhandled code.
4. Ensures exhaustive checks in switch statements.
*/
//  Example 1: Function that always throws an error
function throwError(message) {
    throw new Error(message); // This function never returns a value
}
//  Example 2: Function with infinite loop
function infiniteLoop() {
    while (true) {
        console.log("Looping forever..."); // This function never ends
    }
}
function handleStatus(status) {
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
            var unreachable = status; // If a new status is added, this line will throw a type error
    }
}
