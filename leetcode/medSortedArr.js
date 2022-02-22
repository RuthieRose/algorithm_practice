
const getMedian = (arr1, arr2) => {

 let n = arr2.length;
 let m = arr1.length;

 // edge cases

 if (m === 0) {
  // m
  if (n === 1) {
   return arr2[0].toFixed(5);
  } else if (n === 2) {
   return ((arr2[0] + arr2[1])/2).toFixed(5)
  } else if (n % 2 === 1) {
   return (arr2[Math.floor(n/2)]).toFixed(5);
  } else {
   return ((arr2[n/2] + arr2[n/2 -1])/2).toFixed(5)
  }
 } 

 if (n === 0) {
  if (m === 1) {
   return arr1[0].toFixed(5);
  } else if (m === 2) {
   return ((arr1[0] + arr1[1])/2).toFixed(5)
  } else if (m % 2 === 1) {
   return (arr1[Math.floor(m/2)]).toFixed(5);
  } else {
   return ((arr1[m/2] + arr1[m/2 -1])/2).toFixed(5)
  }
 } 

 // Locate the median of arr2. Merge arr2 median into arr1. 

 let medianN = arr2[Math.floor(n/2)]

}


console.log(getMedian([], [2,4,5,7,8,9,10]))