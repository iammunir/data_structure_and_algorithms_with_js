/*


BIG O NOTATION

Big-O notation is a way of converting the overall steps of an algorithm into algebraic terms, then excluding lower order constants and coefficients that don’t have that big an impact on the overall complexity of the problem.

Time Complexity of algorithm/code is not equal to the actual time required to execute a particular code but the number of times a statement executes

The relation between the input size and the time relative to the input

Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input.

-------

Adalah sebuah metodologi yang digunakan untuk menghitung apakah algoritma tertentu sudah cukup cepat dan efisien dalam memecahkan masalah. Ada dua dimensi dalam menghitung kompleksitas kode. 

Pertama adalah kompleksitas ruang atau SPACE COMPLEXITY yang berkaitan dengan berapa banyak ruang yang digunakan seperti memori ataupun harddisk komputer. 

Kedua adalah kompleksitas waktu atau TIME COMPLEXITY yang berkaitan berapa lama baris kode dijalankan.

OPERASI MATEMATIK

= assignment operation
== logical operation
* multiply
/ division
+ addition
- substraction
++ increement
-- decreement

-------

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n2), n pangkat 2
- f(n) could be constant (f(n) = 1)
- f(n) could be something enterily different

-------

MENYEDERHANAKAN BIG O

CONSTANT don't matter

O(2n)             ==> O(n)
O(500)            ==> O(1)
O(13 n pangkat 2) ==> O(n pangkat 2)

SMALL TERMN don't matter

O(n+10)           ==> O(n)
O(1000n+50)       ==> O(n)
O(n2+5n+8)        ==> O(n2)

---------

Rules of thumb
- arithmetic operations are constant
- variable assignment is constant
- accessing elements in an array (by index) or object (by key) is constant
- in a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop


*/

function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <=n; i++) {
    total += i;
  }
  return total;
}
// jumlah operasi matematik yang terjadi jumlahnya bergantung pada nilai input n, biasa ditulis O(n)


function addUpTo2(n) {
  return n * (n + 1) / 2;
}
// ada 3 jumlah operasi matematik yang terjadi, berapapun nilai input n, biasa ditulis O(1)

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
// operasi O(n) berada dalam sebuah operasi O(n) lainnya, jadi ditulis O(n * n) atau O(n pangkat 2)

/* 

SPACE COMPLEXITY

auxiliary space = space required by the algorithm, not including space taken up by the inputs

Rules of thumbs
- most primitives(booleans, numbers, undefined, null) are constant space
- strings require O(n) space (where n is the string length)
- reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

*/

/*
LOGARITHMS

log2(8) = 8 | 2 to what powers to get 8? 3.




*/

