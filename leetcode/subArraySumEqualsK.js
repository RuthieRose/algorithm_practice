// https://leetcode.com/problems/subarray-sum-equals-k/

var subarraySum = function(nums, k) {
    
 let count = 0
 let sum = 0
 
 let sumCount = {
     0:1
 }
 
 for (let i = 0; i <= nums.length; i++) {
     
     let num = nums[i]
     sum += num
     
     if (sumCount[sum - k]) {
         count += sumCount[sum - k]
     }
     if (sumCount[sum]) sumCount[sum]++
     else sumCount[sum] = 1
     
 }
 
 return count
};