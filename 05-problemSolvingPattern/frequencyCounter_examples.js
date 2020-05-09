// Write a function. Given two positive integers, find out if the two numbers have the same frequency of digits.
function sameFrequency(num1, num2){
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  const counterNum1 = {};
  const counterNum2 = {};
  
  if (strNum1.length !== strNum2.length) return false;

  for (let char of strNum1) {
    counterNum1[char] = (counterNum1[char] || 0) + 1;
  }
  for (let char of strNum2) {
    counterNum2[char] = (counterNum2[char] || 0) + 1;
  }

  for (let key in counterNum1) {
    if(counterNum1[key] !== counterNum2[key]) return false;
  }

  return true;
}

// console.log(sameFrequency(182, 281));

// Write a function, which accepts a variable number of arguments. Check whether there are any duplicates among the arguments passed in.
function areThereDuplicates(arr) {

  const counter = {};

  for (let el of arr) {
    counter[el] = (counter[el] || 0) + 1;
  }

  for (let key in counter) {
    if (counter[key] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates([1,3,9,3]))
