function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter())
console.log(counter())
console.log(counter())

// --------------------

let con = 0;


function count() {
  con++;
  return con;
}

console.log(count())
console.log(count())
console.log(count())