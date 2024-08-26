const [a, b, c] = [1, 2, 3];
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

const person = { name: "Alice", age: 25, city: "Wonderland" };
const { name, age } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 25

const values = [10, 20, 30, 40];
const [, ,third, fourth] = values;

console.log(third); // Output: 30
console.log(fourth); // Output: 40

const numbers = [1, 2, 3, 4, 5];

// Destructure first two elements and gather the rest
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
