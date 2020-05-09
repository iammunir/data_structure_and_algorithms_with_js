// Write a function, which accepts a variable number of arguments. Check whether there are any duplicates among the arguments passed in.
function areThereDuplicates(arr) {
  arr.sort((a,b) => a - b);
  let start = 0;
  let end = 1;
  
  while(start < arr.length) {
    if(arr[start] === arr[end]) return true;
    start++;
    end++;
  }

  return false;
}

// console.log(areThereDuplicates([1,3,9,3]))


