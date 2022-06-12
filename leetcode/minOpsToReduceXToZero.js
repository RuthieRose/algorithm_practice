// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/

var minOperations = function(nums, x) {
    
 let total = nums.reduce((a,b) => a + b)
 let target = total - x
 
 if (target < 0) return -1
 if (target === 0) return nums.length
  
 let start = 0
 let workingSum = 0
 let maxLength = -1
 
 for (let i = 0; i < nums.length; i++) {
     workingSum += nums[i]
     
     while (workingSum > target) workingSum -= nums[start++]
     if (workingSum === target) maxLength = Math.max(maxLength, i - start + 1)
 }
  
 return maxLength === -1 ? -1 : nums.length - maxLength
 
};