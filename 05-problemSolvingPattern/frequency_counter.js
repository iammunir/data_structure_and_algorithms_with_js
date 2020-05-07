/*

FREQUENCY COUNTERS
This pattern uses objects or sets to collect values / frequencies of values
This can often avoid the need for nested loops or O(N^2) operations with arrays / strings


Example
Write a function called 'same', which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

same([1,2,3], [4,1,9]) => true
same([1,2,3], [1,9]) => false
same([1,2,1], [4,4,1]) => false (must be same frequency)


*/

// BIG O NOTATION = O(N^2)
function same1(arr1, arr2){
    // check if the length of both arrays are same, if not return false
    if(arr1.length !== arr2.length){
        return false;
    }

    // loop one array either first or second
    for(let i = 0; i < arr1.length; i++){
        // check if the current value of first array has corresponding squared value in the second array, store in a variable as index
        let correctIndex = arr2.indexOf(arr1[i] ** 2);

        // check the result, false means -1 then return false, if not go on
        if(correctIndex === -1){
            return false;
        }

        // take out the value found in the second array
        arr2.splice(correctIndex, 1);
    }

    // return true, means the arrays are same
    return true;

}

// BIG O NOTATION = O(N)
function same2(arr1, arr2){
    // check if the length of both arrays are same, if not return false
    if(arr1.length !== arr2.length){
        return false;
    }
    
    // create empty object to store the frequency of values in both arrays
    let freqCounter1 = {};
    let freqCounter2 = {};

    // loop both arrays and add the frequency to the corresponding object
    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }
    
    // loop first object that contains frequency of value in first array
    for (let key in freqCounter1) {
        // check if the key (squared) is not in the second object, if so return false
        if ( !(key ** 2 in freqCounter2) ) {
            return false;
        }
        
        // check if the value in both object is not same, if so return false
        if( freqCounter1[key] !== freqCounter2[key ** 2] ) {
            return false;
        }
    }
    
    // return true, means the arrays are same
    return true;


}

const arr1 = [2,3,4,2];
const arr2 = [16,4,9,4 ];

// console.log(same2(arr1, arr2));


/*
ANAGRAMS Challenge

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

*/

function isAnagram1(str1, str2) {
    // check if the length is the same, if not return false
    if (str1.length !== str2.length) { return false }
    
    // create empty object to store the frequency counter for both strings
    let freqCount1 = {};
    let freqCount2 = {};

    // loop both strings and store the frequency to the corresponding objects
    for (let char of str1) {
        freqCount1[char] = (freqCount1[char] || 0) + 1;
    }
    for (let char of str2) {
        freqCount2[char] = (freqCount2[char] || 0) + 1;
    }

    // console.log(freqCount1);
    // console.log(freqCount2);
    
    // loop the first object to check the key and value with the second object
    for (let key in freqCount1) {
        // check if the current key of the first object is not in the second object, if so return false
        if (!(key in freqCount2)) { return false }

        // check if the value of the current key of the first object is not same with the second one, if so return false
        if (freqCount1[key] !== freqCount2[key]) { return false }
    }
    
    // return true, means anagram
    return true;
}

function isAnagram2(first, second) {
    // check the length of both strings, if they are not same return false
    if (first.length !== second.length) { return false }

    // declare new object to store frequency the first string
    const freqCounter = {};

    // loop through the first string
    for (let char of first) {
        // check if the char exists, if so increment the value, otherwise add 1
        freqCounter[char] ? freqCounter[char] += 1 : freqCounter[char] = 1;
    }

    // loop through the second string to compare
    for (let char of second) {
        // check if can't find current char in the object, then return false. it's not an anagram
        if (!freqCounter[char]) { return false} 
        // if find one, decrement
        else { freqCounter[char] -= 1 }
    }

    return true;
}







// console.log(isAnagram2('',''));
// console.log(isAnagram2('aaz','zza'));
console.log(isAnagram2('anagram','nagaram'));
// console.log(isAnagram2('rat','car'));
// console.log(isAnagram2('awesome','awesom'));
// console.log(isAnagram2('qwerty','qeywrt'));
// console.log(isAnagram2('texttwisttime','timetwisttext'));

 





