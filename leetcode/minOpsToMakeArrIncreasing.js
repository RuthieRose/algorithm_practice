// https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/

var minOperations = function(nums) {
 if (nums.length === 1) return 0 
 
 let count = 0
 
 for (let i = 0; i < nums.length - 1; i++) {
     if (nums[i+1] <= nums[i]) {
         let diff = nums[i] - nums[i+1]
         diff++
         nums[i+1] += diff
         count += diff
     }
 }
 
 return count
};