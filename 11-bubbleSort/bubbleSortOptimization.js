/*

BUBBLE Sort is good for a random array, but can be too redundant for a nearly sorted array, however it can be optimized though.

We can use a flag to check if we can find a swappable value in one sequence loop, if it does we can keep looping, otherwise break the loop as it signifies the array is already sorted.

The key is, if we didn't swap any values in the last sequence, we will not swap any values in the next sequence.

*/

const array = [8, 1, 2, 5, 6, 8, 9, 13];

function bubbleSort(arr) {

  let noSwaps;

  for(let i = arr.length; i > 0; i--) {
    
    noSwaps = true;

    for(let j = 0; j < i-1; j++) {

      console.log(arr, arr[j], arr[j+1]);

      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;

        noSwaps = false;
      }
    }

    console.log('one sequence passed')
    if(noSwaps) break;

  }

  return arr;
}

bubbleSort(array);
