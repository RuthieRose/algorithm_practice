const search = (arr, n) => {

 let low = 0;
 let high = arr.length - 1;

 while (low <= high) {

  let mid = Math.floor((low + high)/2)
  let guess = arr[mid];
  if (guess === n) {
   return mid;
  }

  if (guess < n) {
   low = mid+1
  }
 
  if (guess > n) {
   high = mid - 1;
  }
 }

 return -1 

}

console.log(search([0,1,3,4,5,6,8,9,10,500,750,1050], 8))

console.log(search([0,1,3,4,5,6,8,9,10,500,750,1050], 11))