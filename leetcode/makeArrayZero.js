// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/

var minimumOperations = function(nums) {
    
 let count = 0
 
 let max = Math.max(...nums)
 while (max > 0) {
     let filtered = nums.filter(item => item > 0)
     let num = Math.min(...filtered)
     nums = nums.map(number => {
     if (number !== 0) {
         return number -= num
         }
     else return 0
     })  
     max = Math.max(...nums)
     count++
 }
 return count
};