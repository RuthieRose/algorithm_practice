// https://leetcode.com/problems/keep-multiplying-found-values-by-two/

var findFinalValue = function(nums, original) {
    
 let index = nums.indexOf(original)
 while (index !== -1) {
     original *= 2
     index = nums.indexOf(original)
 }
 
 return original
};