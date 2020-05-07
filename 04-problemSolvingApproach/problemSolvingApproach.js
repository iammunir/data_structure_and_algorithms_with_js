/*

1. Understanting the problem
- can I restate the problem in my own words?
- what are the inputs that go to the problem?
- what are the outputs that should come from the solution to the problem?
- can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (you may be able to answer when you set to solve the problem)
- how should I label the important pieces of data that are a part of the problem?

2. Explore concrete examples
coming up with examples can help you understand the problem better
examples also provide sanity checks that your eventual solution works how it should
- start with simple examples
- progress to more complex examples
- explore examples with empty inputs
- explore examples with invalid inputs

3. Break it down
explicitly write out the steps you need to take.
This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or missunderstandings before you dive in and have to worry about the details as well.

4. Solve or simplify
- find the core difficulty in what you are trying to do
- temporarily ignore that difficulty
- write a simplified solution
- then incorporate that difficulty back in

5. Look back and refactor
congrats on solving it, but you are not done!
- can you check the result?
- can you derive the result differently?
- can you understand it at a glance?
- can you use the result or method for some other problem?
- can you improve the performance of your solution?
- can you think of other ways to refactor?
- how have other people solved this problem?


EXAMPLE

Write a function that count the letter occurance in a string

*/

function countChar1(str){
    // create an object to return at the end
    let obj = {};
    // loop through the string input
    for(let i = 0; i < str.length; i++){
        // change the char into lowercase 
        let char = str[i].toLowerCase();
        // check if every char in the string is already available in the object we create, if so add 1
        if(obj[char] > 0){
            obj[char]++;
        } else {
            // if not available add that char to the object
            obj[char] = 1;
        }
    }
    // return the object
    return obj;
}

function countChar2(str){
    // create an object to return at the end
    let obj = {};
    // loop through the string input
    for(let char of str){
        // change the char into lowercase 
        char.toLowerCase();
        // check if only alphanumeric
        if(/[a-z0-9]/.test(char)){
            // check if every char in the string is already available in the object we create, if so add 1
            obj[char] > 0 ? ++obj[char] :
            // if not available add that char to the object
            obj[char] = 1;
        }
    }
    // return the object
    return obj;
}

function countChar3(str){
    // create an object to return at the end
    let obj = {};
    // loop through the string input
    for(let char of str){
        // change the char into lowercase 
        char.toLowerCase();
        // check if only alphanumeric
        if(isAlphaNumeric(char)){
            // check if every char in the string is already available in the object we create, if so add 1
            // if not available add that char to the object
            obj[char] = ++obj[char] || 1;
        }
    }
    // return the object
    return obj;
}

function isAlphaNumeric(char){

    // check the char value based on ASCII
    let code = char.charCodeAt(0);

    // check if the char is numeric or alphabeticS
    if ( !(code > 47 && code < 58) && // numeric (0-9)
         !(code > 64 && code < 91) && // upper alphabet (A-Z)
         !(code > 96 && code < 123) ) { // lower alphabet (a-z)
        
        return false;
    }

    return true;
}

console.log(countChar2('hellow there!'));
