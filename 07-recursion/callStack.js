/*

What is Call Stack?
- Built in data structure that manages what happens when functions are invoked
- Any time a function is invoked it is placed (pushed) on the top of the call stack
- When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)

Why do we care about the call stack?
- You are used to functions being pushed on the call stack and popped off when they are done
- When we write recursive functions, we keep pushing new functions onto the call stack.

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
