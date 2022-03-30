// https://leetcode.com/problems/search-a-2d-matrix/

var searchMatrix = function(matrix, target) {
    
 let flatMatrix = matrix.flat();
  
 let low = 0;
 let high = flatMatrix.length;
  
 let mid = Math.floor((low + high)/2);
  
 while (low < high) {
     if (flatMatrix[mid] === target) return true;
     
     if (target > flatMatrix[mid]) {
         low = mid+1;
         mid = Math.floor((low + high)/2);
     }
     
     if (target < flatMatrix[mid]) {
         high = mid;
         mid = Math.floor((low + high)/2);
     }
 }
  
  
  return false;
};