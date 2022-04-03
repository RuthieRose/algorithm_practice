// https://leetcode.com/problems/maximum-product-of-three-numbers/

var maximumProduct = function(nums) {
    
   if (nums.length === 3) return nums[0]*nums[1]*nums[2];
   
   nums = nums.sort((a,b) => b - a);
   
   let max1 = nums[0];
   let max2 = nums[1];
   let max3 = nums[2];
   let min1 = nums[nums.length-1];
   let min2 = nums[nums.length-2];
 
 return Math.max(max1*max2*max3, min1*min2*max1);
};