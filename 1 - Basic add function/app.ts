function add(a: number, b: number, x: string, y: boolean) {
  if (y) {
    console.log(x + (a + b));
  }
  return a + b;
}

const x = "Sum of a and b is : ";
const y = true;

console.log(add(1, 2, x, y));
