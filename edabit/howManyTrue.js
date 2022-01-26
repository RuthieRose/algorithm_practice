function countTrue(arr) {
 let count = 0;

 arr.forEach(item => {
  if (item) count++;
 })

 return count;
	
}

console.log(countTrue([true, false, false, true, false]))
console.log(countTrue([false, false, false, false]))
console.log(countTrue([]))