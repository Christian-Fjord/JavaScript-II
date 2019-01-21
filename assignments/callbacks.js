// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

// Step 1.1
function add(x,y) {
  return x + y;
}

// Step 1.2
function sub(x,y) {
  return x -y;
}


// Step 2
function calculator(x,y,operation) {
  return operation(x,y);

}

// Step 3
console.log(calculator(3,4,add));


function theLength(length) {
  console.log(length);
}

function getLength(arr, callback) {
  // getLength passes the length of the array into the callback.
  
  return callback(arr.length);

  
 
}

getLength(items, theLength);

debugger;

function theLast(lastItem) {
  console.log(lastItem);
}
function last(arr, callback) {
  // last passes the last item of the array into the callback.
  return callback(arr[arr.length - 1]);
}


last(items, theLast);

debugger;

function theSum(sum) {
  console.log(sum);
}

function sumNums(x, y, callback) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
 
  callback(x+y);
  
}

sumNums(3,4,theSum);


function theFactor(factor) {
  console.log(factor);
}

function multiplyNums(x, y, callback) {
  // multiplyNums multiplies two numbers and passes the result to the callback.

  return callback(x*y);

}

multiplyNums(5,6, theFactor);


function isItPresent(present) {
  console.log(present);
}
function contains(item, list, callback) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

    let isPresent = list.includes(item);

    return callback(isPresent);
  
}

contains("Gum", items, isItPresent );
contains("Cars", items, isItPresent);


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
