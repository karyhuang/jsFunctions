// 1. Return true if a number is even and false otherwise

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}
// shorter version of above
// num % 2 === 0 is a boolean statement
function isEven2 (num) {
  return num % 2 === 0;
}



// 2. Factorial 
// note: 0! = 1

// Preferred method: start from 1 and multiply up. Advantage: since we start at 1, 0! will be 1, perfect. 
function factorial(num) {
  // define a result variable
  // use a loop to multiply the result by every number between 1 and that number
  var result = 1;
  for (var i = 2; i <= num; i++) { // you can start multiplying by 2 because * 1 is unecessary
    result *= i;
  }
  return result;
}
// Another method: start from the number and multiply down. Disadvantage: since we start at 0, 0! will be 0 so we need to give it a special if statement.
function factorial2(num) {
  if (num === 0) {
    return 1;
  }
  var result = num;
  for (var i = num - 1; i >= 2; i--) { // you can start multiplying by 2 because * 1 is unecessary
    result *= i;
  }
  return result;
}



// 3. Kebab to snake - replace all dashes in the string with underscores

function kebabToSnake(str) {
  // .replace does not modify the actual string, so we need to store the modified copy in a new variable
  // use a RegExp with g flag (stands for global) which looks for all "-"s in the string
  var newStr = str.replace(/-/g, "_");
  return newStr;
}