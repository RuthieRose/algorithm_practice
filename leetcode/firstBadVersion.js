var solution = function(isBadVersion) {
 /**
  * @param {integer} n Total versions
  * @return {integer} The first bad version
  */
 return function(n) {
     
     if (n===1) return n;
     
     let foundBadVersion = null;
     
     let low = 1;
     let high = n;
     let mid = Math.floor((n+1)/2);
     let found = isBadVersion(mid);
     
     while (foundBadVersion === null) {
         
         if (!found) {
             low = mid+1;
             mid = Math.floor((low+high)/2)
             found = isBadVersion(mid);             
         } 
         
         else if (found && isBadVersion(mid-1)) {
             high = mid - 1;
             mid = Math.floor((low+high)/2);
             found = isBadVersion(mid)
         }
         
         else if (isBadVersion(mid) && !isBadVersion(mid-1)) {
             foundBadVersion = mid;       
         } 
         
     }
 return foundBadVersion;   
 }
};