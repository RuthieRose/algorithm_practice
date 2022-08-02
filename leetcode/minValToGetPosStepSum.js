// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/

var minStartValue = function(nums) {
    
 let prefixSum = [nums[0]]
  
 let sum = nums[0]
 
 for (let i = 1; i < nums.length; i++) {
     prefixSum.push(sum+=nums[i])
 }
  
 let min = 0 - Math.min(...prefixSum)
 
 min = Math.max(0, min)
  
 return min + 1
};