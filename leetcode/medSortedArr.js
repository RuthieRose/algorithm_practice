
const getMedian = (arr1, arr2) => {

 let m = arr1.length;
 let n = arr2.length;

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
 
 let largeArrLength = Math.max(arr1.length, arr2.length); 

 let largeArr;
 let smallArr;
 let isEven;

 if (m === largeArrLength) {
   largeArr = arr1;
   smallArr = arr2;
 } else {
   largeArr = arr2;
   smallArr = arr1;
 }

 if ((m+n) % 2 === 0) {
   isEven = true;
 }
 
 let medianIndex = Math.floor((m+n)/2)
 
 let mergedArr = [];


 while (mergedArr.length < medianIndex + 1) {
  if (smallArr.length === 0) {
   mergedArr.push(largeArr.shift());
  } else if (largeArr.length === 0) {
   mergedArr.push(smallArr.shift());
  } else if (largeArr[0] < smallArr[0]) {
   mergedArr.push(largeArr.shift());
  } else {
   mergedArr.push(smallArr.shift());
  }
 }

 console.log(mergedArr, medianIndex)
 if (isEven) {
  return ((mergedArr[medianIndex - 1] + mergedArr[medianIndex])/2).toFixed(5)
 } else {
  return (mergedArr[medianIndex]).toFixed(5)
 } 

}


console.log(getMedian([0,0], [0,0]))
console.log(getMedian([1,3], [2]))
console.log(getMedian([1,2], [3,4]))