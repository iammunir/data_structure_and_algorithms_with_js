/*

- What is Recursion?
A process (a function) that calls itself

- What is Call Stack?
Built in data structure that manages what happens when functions are invoked
Any time a function is invoked it is placed (pushed) on the top of the call stack
When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)

- How Recusive Functions work?
Invoke the same function with a different input until you reach your BASE CASE (the condition when the recustion ends)!

- Two essential parts of a recursive function
+ base case
+ different input

*/

// Call Stack implementation, it's better to see in the call stack dev tools. Inspect Element >> Sources >> Call Stack

function mandi() {
  return 'lagi mandi';
}

function sarapan() {
  const makanan = masak();
  return `sarapan ${makanan}`;
}

function masak() {
  const menu = ['Roti Bakar', 'Nasi Goreng', 'Mie Goreng', 'Oatmeals'];
  return menu[Math.floor(Math.random() * menu.length)];
}

function bangunTidur() {
  mandi();
  sarapan();
  console.log('Sekarang siap, berangkat kerja');
}

bangunTidur();

// Implementation of recursive function

// regular countDown function
function hitungMundur1(num) {
  for( let i=num; i>0; i--) {
    console.log(i);
  }
  console.log('Selesai');
}
hitungMundur1(5);

// recursive countDown function
function hitungMundur2(num) {
  if (num <= 0) {
    console.log('Selesai');
    return;
  }
  console.log(num);
  num--;
  hitungMundur2(num);
}
hitungMundur2(5);


/* sum a range recursive function

sumRange(3)
  return 3 + sumRange(2);
                return 2 + sumRange(1);
                              return 1;

*/
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
console.log(sumRange(5));



// factorial iterative solution
function factorial1(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

/*
factorial recursive solution

factorial2(5); / 120
  return 5 * factorial(4); / 24
                return 4 * factorial(3); / 6
                              return 3 * factorial(2); / 2
                                            return 2 * factorial(1) / 1
                                                          return 1

*/
function factorial2(num) {
  if (num === 1) return 1;
  return num * factorial2(num - 1);
}
console.log(factorial2(5));
