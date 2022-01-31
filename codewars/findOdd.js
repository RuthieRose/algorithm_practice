// function findOdd(A) {
//  let ints = {};
//  for (let i = 0; i < A.length; i++) {
//   let int = A[i];
//   if (!ints[int]) ints[int] = 1;
//   else if (ints[int]) ints[int]++
//  }
//  for (let int in ints) {
//   if (ints[int] % 2 === 1) return int;
//  }
// }

function findOdd(A) {
 return A.reduce((a,b) => a^b)
}

console.log(findOdd([1,1,1,1,10,1,1,2,2]))