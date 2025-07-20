function add(a, b, x, y) {
    if (y) {
        console.log(x + (a + b));
    }
    return a + b;
}
var x = "Sum of a and b is : ";
var y = true;
console.log(add(1, 2, x, y));
