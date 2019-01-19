// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let nameOne = "First";

function nameTwo () {
  let nameTwo = "Last";
  console.log(nameOne + nameTwo);
}

nameTwo();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  return function() {
    count = count + 1;
    return count;
  } 
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

/* 
   ===============================================
   This works because the anon function is storing
   the updated count instead of the whole thing
   reseting every time it's called. 
   ===============================================
*/



// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.

const counterFactory = () => {
  
  let thisCount = 10;

  return function increment() {
    thisCount = thisCount + 1;
    return thisCount;

    return function decrement() {
      thisCount = thisCount - 1;
      return thisCount;
    }
  }

  
};

const diffCount = counterFactory();

console.log(diffCount());
console.log(diffCount());
