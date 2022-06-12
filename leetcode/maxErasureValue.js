// https://leetcode.com/problems/maximum-erasure-value/

// The music that powered me through today's coding session is 'RUN BTS'... 'run bulletproof, run bulletproof run yeah you gotta run... '

var maximumUniqueSubarray = function(nums) {
    
 let start = 0
 let sum = 0
 let subArray = []
 let maxSum = 0
 
 let set = new Set()
 
 for (let i = 0; i < nums.length; i++) {
     
     let num = nums[i]
     
     if (set.has(num)) {
         while (set.has(num)) {
             let remove = subArray.shift()
             set.delete(remove)
             sum -= remove       
         }
     }
     sum += num
     subArray.push(num)
     set.add(num)
     maxSum = Math.max(maxSum, sum)
 
 }
 
 return maxSum
};