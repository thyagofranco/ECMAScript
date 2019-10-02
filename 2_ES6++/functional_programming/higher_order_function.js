const add = (x, y) => x + y;
const mult = (x, y) => x * y;

const calculate = (fn, x, y) => fn(x, y);

console.log(calculate(add, 1, 2));
console.log(calculate(mult, 1, 2));