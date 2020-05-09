/*

SELECTION SORT

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

STEP:
- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array until you find a smaller number
- If a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array
- If the minimum is not the value (index) you initially began with, swap the two values
- Repeat this with the next element until the array is sorted

BIG O = O(N^2)

*/

// SIMPLE SOLUTION
function selectionSort1(arr) {
  
  // loop the array
  for (let i = 0; i < arr.length; i++) {

    // store the first element as the smallest value as initial
    let minimum = i;

    // loop the rest of array
    for (let j = i+1; j < arr.length; j++) {
      
      // compare the current minimum with the next items
      if (arr[j] < arr[minimum]) {

        // update the minimum
        minimum = j;
      }
    }

    // swap the values between minimum and the current i
    let temp = arr[i];
    arr[i] = arr[minimum];
    arr[minimum] = temp;

  }

  return arr;
}


// OPTIMIZED
function selectionSort2(arr) {
  
  // loop the array
  for (let i = 0; i < arr.length; i++) {

    // store the first element as the smallest value as initial
    let minimum = i;

    // loop the rest of array
    for (let j = i+1; j < arr.length; j++) {
      
      // compare the current minimum with the next items
      if (arr[j] < arr[minimum]) {

        // update the minimum
        minimum = j;
      }
    }

    // swap the values only if the smaller value is found
    if (arr[i] !== arr[minimum]) {
      console.log(arr);
      let temp = arr[i];
      arr[i] = arr[minimum];
      arr[minimum] = temp;
    }

  }

  return arr;
}

console.log(selectionSort2([2,3,1,24,67,32,12,97]))
