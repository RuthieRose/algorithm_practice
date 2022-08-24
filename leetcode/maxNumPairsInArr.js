// https://leetcode.com/problems/maximum-number-of-pairs-in-array/

var numberOfPairs = function(nums) {
    
 let count = {}
 
 for (let i = 0; i < nums.length; i++) {
     
     let num = nums[i]
     if (count[num]) count[num]++
     else count[num] = 1
     
 }
 
 let counts = Object.values(count)
 
 let pairs = 0
 let leftovers = 0
 
 for (let i = 0; i < counts.length; i++) {
     let num = counts[i]
     if (num % 2 === 0) {
         pairs += num/2
     }
     else {
         leftovers++
         num -= 1
         pairs += num/2
     }
 }
 
 return [pairs, leftovers]
};