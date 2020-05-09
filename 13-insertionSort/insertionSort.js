/*

INSERTION SORT

Builds up the sort by gradually creating a larger left half which is always sorted

STEP:
- start by picking the second element in the array
- now compare the second element with the one before it and swap if necessary
- continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
- repeat until the array is sorted

*/

function insertionSort(arr) {

  // loop the array
  for (let i = 1; i < arr.length; i++) {

    // pick the second element in the array
    let currentVal = arr[i];

    // loop the previous elements to compare and as long as the value is greater than the current value
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      
      // swap the value with the value before 
      arr[j+1] = arr[j];
    }

    console.log(arr);
    console.log(`i = ${arr[i]}, j = ${arr[j]}, j+1 = ${arr[j+1]}, cur = ${currentVal}`);
    
    // insert the current val to the correct order
    arr[j+1] = currentVal;
    console.log(`updated arr[j+1] = ${arr[j+1]}`);
    console.log('============')
  }

  return arr;
}

console.log(insertionSort([4,2,8,43,78,11]));
//            cur = 2      j i
// console.log(insertionSort([2,4,8,43,78,11]));
//               cur = 8        j i
// console.log(insertionSort([2,4,8,43,78,11]));
//               cur = 43         j i
// console.log(insertionSort([2,4,8,43,78,11]));
//               cur = 78            j i
// console.log(insertionSort([2,4,8,43,78,11])); // 78 >> 11
//               cur = 11               j i
// console.log(insertionSort([2,4,8,43,43,78])); // 43 >> 11
//               cur = 11            j     i
// console.log(insertionSort([2,4,8,43,43,78])); // j+1 = 43
//               cur = 11         j        i
// console.log(insertionSort([2,4,8,11,43,78]));
//               cur = 11         j        i