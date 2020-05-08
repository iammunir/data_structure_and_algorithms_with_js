/*

It's basically just adding an outer function

function outer(input) {
  
  const outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}

Pure Recursion Tips
- For arrays, use methods like slice, the spread operator and concat that make copies of arrays so you do not mutate them.
- Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
- To make copies of objects use Object.assign or the spread operators

*/

function collectOddNums(arr) {
  
  const result = [];

  function find(nums) {
    
    // base case
    if (nums.length === 0) {
      return;
    }
    
    if (nums[0] % 2 !== 0) {
      result.push(nums[0]);
    }

    // recursive case
    find(nums.slice(1));
  }

  find(arr);

  return result;
}

console.log(collectOddNums([1,2,3,4,5,6,7,8,9]));


// PURE RECURSION

function collectOddNums(arr) {
  
  let newArr = [];

  // if it's even, return new array to be concatinated with the prev arr
  if (arr.length === 0) {
    return newArr;
  }
  
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  // recursive execution
  newArr = newArr.concat(collectOddNums(arr.slice(1)));

  return newArr;
}

console.log(collectOddNums([1,2,3,4,5,6,7,8,9]));

/*

[1].concat(collectOddNums([2,3,4,5,6,7,8,9]))
      [0].concat(collectOddNums([3,4,5,6,7,8,9]))
          [].concat(collectOddNums([4,5,6,7,8,9]))
              [].concat(collectOddNums([5,6,7,8,9]))
                  [5].concat(collectOddNums([6,7,8,9]))
                      [].concat(collectOddNums([7,8,9]))
                          [7].concat(collectOddNums([8,9]))
                              [].concat(collectOddNums([9]))
                                [9].concat(collectOddNums([]))
                                    return []

*/