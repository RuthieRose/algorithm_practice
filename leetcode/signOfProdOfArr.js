// https://leetcode.com/problems/sign-of-the-product-of-an-array/

var arraySign = function(nums) {
    
 if (nums.includes(0)) return 0
 
 nums = nums.sort((a,b) => a - b)
 
 while (nums[nums.length - 1] > -1) {
     nums.pop()
 }
 
 let remaining = nums.length 
 if (remaining % 2 === 1) return -1
 else return 1
 
};