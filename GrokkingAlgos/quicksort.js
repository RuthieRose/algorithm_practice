function quicksort(array) {

 // base case
 if (array.length <= 1) {
   return array;
 }

 let pivot = array[0];
 
 let left = []; 
 let right = [];

 for (let i = 1; i < array.length; i++) {
   if (array[i] < pivot) left.push(array[i]) 
   else right.push(array[i])
 }

 return [...quicksort(left), pivot, ...quicksort(right)];
};

let unsorted = [23, 45, 16, 37, 3, 99, 22];

console.log(quicksort([4,1,19,3,2,7,24,101,13]))