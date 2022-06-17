// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

var repeatedNTimes = function(nums) {
    
 let elements = {}
 
 for (let i = 0; i < nums.length; i++) {
     
     let num = nums[i]
     if (elements[num]) return num 
     else elements[num] = 1
 }
};