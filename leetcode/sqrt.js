var mySqrt = function(x) {
    
 let left = 1;
 let right = x;

 if (x < 2) {
  return x;
 }

 while (left < right) {
  let mid = left + Math.floor((right-left)/2);

   if (mid*mid === x) {
    return mid
   } else if  ((mid*mid) > x ) {
     right = mid;
   } else {
    left = mid + 1;
   }

 }

 return left - 1
 
};

console.log(mySqrt(16))
console.log(mySqrt(8))