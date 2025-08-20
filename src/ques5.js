
function* idGenerator(start = 1) {
  let id = start;
  while (true) {
    yield id++;   
  }
}

const gen = idGenerator(100); 

console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
