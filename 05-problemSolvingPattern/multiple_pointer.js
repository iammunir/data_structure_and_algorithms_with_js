/*

MULTIPLE POINTER

Creating pointers or values that correspond to an index or position and move towards the beginnning, end or middle based on a certain condition.

It's very efficient for solving problems with minimal space complexity as well.


EXAMPLE

Write a function which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

sumZero([-3, -2, -1, 0, 1, 2, 3]) => [-3, 3]
sumZero([-2, 0, 1, 3]) => undefined
*/

/* 
NAIVE SOLUTION
Time Complexity - O(N^2)
Space Complexity - O(1)
*/

function sumToZero1(arr) {
    // loop the array with the first index is the starting point
    for (let i = 0; i < arr.length; i++) {
        // create a nested loop with the second index is the starting point
        for (let j = i+1; j < arr.length; j++) {
            // check if the sum of the current outer value (first) and the current inner value (second) is 0, if so return the outer and inner value
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// console.log(sumToZero1([-2, -1, 0, 1, 2, 3]))

/*
REFACTOR

Time Complexity - O(N)
Space Complexity - O(1)
*/

function sumToZero2(arr) {
    // create variable left to store the first index of array (0)
    let left = 0;
    
    // create variable right to store the last index of array (length -1)
    let right = arr.length - 1;

    // create a while loop, with condition as long as the left index is lower than the right index
    while(left < right) {
        // sum the value in left index with the right one
        let sum = arr[left] + arr[right];
        
        // if the sum is zero, return both value
        if (sum === 0) {
            return [arr[left], arr[right]];
        } 
        
        // if sum is higher than zero, decrement the right index, to move it to left side
        else if (sum > 0) {
            right--;
        } 
        
        // if sum is lower than zero, increment the left to move the index to the right
        else {
            left++;
        }
    }

}

// console.log(sumToZero2([-5, -4, 0, 1, 2, 3]))

/*
Implement a functon called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

*/


function countUniqueValues(arr) {
    // create a variable to store the first index
    let i = 0;
    
    // loop the array with index starting from the second index and compare with the first index
    for(let j = 1; j < arr.length; j++) {
        // if the value is not equal, increment first index so it moves to the left, and change the value on it with the value of the second index
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    
    // return the value of index first + 1
    return i+1;
}

console.log(countUniqueValues([2,3,3,3,4,4,5,6,8,8,9,20,29,29]))