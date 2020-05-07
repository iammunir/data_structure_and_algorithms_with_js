/*

What is sorting?

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items some kind of order

- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue

Why do we need to learn sorting?
- Sorting is an incredibly common task, so it's good to know how it works
- There are many different ways to sort things, and different techniques have their own advantages and disadvantages
- Not relying on built-in sorting functions

Elementary Sorting Algorithms
- Bubble Sort
- Selection Sort
- Insertion Sort

*/

const array = [56, 34, 21, 31, 98, 34, 5, 3];

// JavaScript built-in sort function
// if the callback function returns a negative number, a should come before b
// if it returns a positive number, a should come after b
// and if it returns 0, a and b are the same as far as the sort is concerned
console.log(array.sort((a, b) => a - b));


// Many sorting algorithms involve some type of swapping functionality

// ES5
function swapES5(arr, indx1, indx2) {
  let temp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = temp;
}

// ES6
const swapES6 = (arr, indx1, indx2) => {
  [ arr[indx1], arr[indx2] ] = [ arr[indx2], arr[indx1] ];
}