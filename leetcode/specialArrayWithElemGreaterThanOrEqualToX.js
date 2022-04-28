// https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/

var specialArray = function(nums) {
    
 let unique = -1;
 
 for (let i = 0; i <= nums.length; i++) {
     let filter = nums.filter(num => {
         return num >= i
     })
     if (filter.length === i) {
         unique = i;
     }
 }
 
 return unique;
};