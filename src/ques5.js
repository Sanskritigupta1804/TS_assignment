// Generator function to create IDs
function* idGenerator(start = 1) {
  let id = start;
  while (true) {
    yield id++;   // returns current id, then increments
  }
}

// Usage:
const gen = idGenerator(100);  // start from 1000

console.log(gen.next().value); // 1000
console.log(gen.next().value); // 1001
console.log(gen.next().value); // 1002
console.log(gen.next().value); // 1003
