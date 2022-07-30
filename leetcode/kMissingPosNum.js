// https://leetcode.com/problems/kth-missing-positive-number/

var findKthPositive = function(arr, k) {
    
 let start = 1
 let end = arr[arr.length - 1] + k
 
 for (let start = 1; start <= end; start++) {
     
     if (start !== arr[0]) {
         k--
         if (k=== 0) return start
     }
     if (start === arr[0]) arr.shift()
 }
 
};