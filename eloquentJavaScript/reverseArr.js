
function newReverse(arr) {
 let array = [];
 for (let i = arr.length - 1; i >= 0; i--) {
  array.push(arr[i]);
 }
 return array;
}

function reverseInPlace(arr) {
 for (let i = 1; i <arr.length; i++) {
  let temp = arr.splice(i,1);
  arr = [...temp, ...arr];
 }
 return arr
}
// console.log(reverseInPlace([1,2,3,4,5]))

