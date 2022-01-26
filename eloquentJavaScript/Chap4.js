let arr = [];

function range(start, end, step=1) {
 if (start > end) {
  for (let i = start; i >= end; i += step) {
   arr.push(i);
  }
 }
 if (end > start) {
  for (let i = start; i <= end; i += step) {
   arr.push(i);
  }
 }

 return arr;
}

function sum(array) {
 return array.reduce((a,b) => a+b);
}

console.log(range(5,2,-1))
// console.log(sum(arr));