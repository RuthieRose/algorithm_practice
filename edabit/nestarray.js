
const canNest = (arr1, arr2) => {
 let arr1Min = arr1.sort()[0];
 let arr1Max = arr1.sort().reverse()[0];
 let arr2Min = arr2.sort()[0];
 let arr2Max = arr2.sort().reverse()[0];
 if (arr1Min > arr2Min) {
  if (arr1Max < arr2Max) {
   return true;
  }
 }
 return false;
}

console.log(canNest([1, 2, 3, 4], [0, 6]));

console.log(canNest([3, 1], [4, 0]));
console.log(canNest([9, 9, 8], [8, 9])); 
console.log(canNest([1, 2, 3, 4], [2, 3]));