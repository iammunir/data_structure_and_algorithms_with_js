/*

SLIDING WINDOW

- This pattern involves creating a WINDOW which can either be an array or number from one position to another
- Depending on a certain condition, the window either increases or closes (and a new window is created)
- Very useful for keeping track of a subset of data in an array/string etc.

*/

// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculcate the maximum sum of n consecutive elements in the array.

// NAIVE SOLUTION
function maxSubarraySum1(arr, num) {
  // check if the number element requested is more than the array, return null
  if(num > arr.length) return null;
  
  // create a variable to store inintial max with -Infinity
  let max = -Infinity;
  // create an object to store the indexs (optional)
  let indexes = {};

  // do looping, arr.length - num + 1 is to get the maximum looping we can do, if the array is 10 length and the num is 3, then the max loop we do is when it reaches position 7
  for (let i = 0; i < arr.length - num + 1; i++) {

    // create a variable to store a value addition
    let temp = 0;

    // looping the WINDOW
    for (let j = 0; j < num; j++) {
      // add the values
      temp += arr[i+j];
    }

    // check if the current sum is higher than the max current max
    if (temp > max) {
      max = temp;
      indexes['start'] = i;
      indexes['end'] = i + num;
    }
  }
  return {maxValues: max, indexes};
}

console.log(maxSubarraySum1([2,3,9,1,5,6,2,7,3,5,8], 3))


// SLIDING WINDOW APPROACH: time complexity - O(n)
function maxSubarraySum2(arr, num) {

  // create 2 variables to store max sum and temporary sum 
  let maxSum = 0;
  let tempSum = 0;

  // create an object to store the indexs (optional)
  let indexes = {};

  // check if the number element requested is more than the array, return null
  if (arr.length < num) return null;

  // loop the first window
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }

  // store tempsum as initial max sum
  maxSum = tempSum;

  // loop the next window 
  for (let i = num; i < arr.length; i++) {
    // update the temp sum by substracting the last first index of the window and by adding the current last index of the window
    tempSum = tempSum - arr[i - num] + arr[i];
    
    // check if the current sum is higher than the max
    if (tempSum > maxSum) {
      maxSum = tempSum;
      indexes['start'] = ++i - num;
      indexes['end'] = i;
    }
  }

  return {maxValues: maxSum, indexes};

}

console.log(maxSubarraySum2([2,3,9,1,5,6,2,7,3,5,8], 3))

