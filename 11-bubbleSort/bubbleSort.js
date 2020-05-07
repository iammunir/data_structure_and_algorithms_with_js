const visual1 = document.getElementById('visual1');
const visual2 = document.getElementById('visual2');
/*

BUBBLE SORT

A sorting algorithm where the largest/lowest values BUBBLE up to the top

STEP:
- start looping from with a variable called i the end of the array towards the beginning
- start an inner loop with a variable called j from the beginning until i-1
- if arr[j] is greater than arr[j+1], swap those two values
- return the sorted array


*/

const array = [24, 12, 34, 85, 47, 29, 42, 98];

function bubbleSort(arr) {
  
  // start looping from with a variable called i the end of the array towards the beginning
  for(let i = arr.length; i > 0; i--) {

    // start an inner loop with a variable called j from the beginning until i-1 (-1 to reduce a redundant comparison happen to the last index)
    for(let j = 0; j < i-1; j++) {

      console.log(arr, arr[j], arr[j+1]);

      // if arr[j] is greater than arr[j+1] (arr[j+1] is the next index of the current j), swap
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }

    console.log('one sequence passed')

  }
  return arr;
}



function bubbleSortES6(arr) {
  
  const swap = (arr, indx1, indx2) => {
    [ arr[indx2], arr[indx1] ] = [ arr[indx1], arr[indx2] ];
  };

  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i-1; j++) {
      if(arr[j] > arr[j+1]) swap(arr, j, j+1)
    }
  }

  return arr;
}

visual1.textContent = array;
visual2.textContent = bubbleSort(array);
