/*

- Binary Search is a much faster form of search
- Rather than eliminating one element at a tim, you can eliminate half of the remaining elements at a time
- Binary Search only works on sorted arrays
- Devide and Conquer method
- Works for sorted array

BIG O
worst and average case  = O(log n)
best case               = O(1) 

*/

const array = [5,7,9,12,14,16,45,67,89,97];
const num = 7;

function binarySearch(arr, val) {
  // create a left / start pointer at the start of array  
  let start = 0;
  // a right pointer at the end of the array
  let end = arr.length - 1;
  // and a middle pointer in between
  let middle = Math.floor((start + end) / 2);

  // while the start pointer comes before the end pointer, do:
  while(start <= end) {
    
    // check if you find the value you want, return the index 
    if(arr[middle] === val) {
      return middle;

    // if the value is lower than middle, move the end pointer down 
    } else if(val < arr[middle]) {
      end = middle - 1;

    // if the value is higher than middle, move the start pointer up
    } else {
      start = middle + 1;
    }

    // update the middle pointer
    middle = Math.floor((start + end) / 2);
  }

  // if you never find the value, return -1
  return -1;
}

console.log(binarySearch(array, num));
