/*

Linear searching is the simplest way to search for a value to look at every element in the array and check if it's the value we want

JavaScript built in search functions: indexOf, includes, find, findIndex

Big O 
worst case      = O(n)
average case    = O(n)
best case       = O(1)


*/

const array = [24, 21, 94, 42, 48, 65, 48];
let num = 50;

function linearSearch(arr, num) {
  let index = [];
  for (let i=0; i<arr.length; i++) {
    if(arr[i] === num) {
      index.push(i);
    }
  }
  if(index.length === 0) {
    index = -1;
  }
  return index;
}

let result = linearSearch(array, num);
console.log(result);