var guessNumber = function(n) {
 let low = 1;
 let high = n;
 let mid = Math.floor((1+high)/2)
 
 let result = guess(mid);
 
 while (result !== null) {
     
     if (result === -1) {
         high = mid - 1;
         mid = Math.floor((1+high)/2)
         result = guess(mid)
     }
     
     if (result === 1) {
         low = mid + 1;
         mid = Math.floor((low + high)/2)
         result = guess(mid)
     }
     
     if (result === 0) {
        return mid;
     }
 }

 return mid;
 
};

