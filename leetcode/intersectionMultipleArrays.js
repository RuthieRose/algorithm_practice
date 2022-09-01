// https://leetcode.com/problems/intersection-of-multiple-arrays/

var intersection = function(nums) {
    
 let frequency = {}
 let result = []
 
 for (let i = 0; i < nums.length; i++) {
     let array = nums[i]
     for (let j = 0; j < array.length; j++) {
         let num = array[j]
         if (frequency[num]) frequency[num]++
         else frequency[num] = 1
     }
 }
     
 
 for (let key in frequency) {
     if (frequency[key] === nums.length) result.push(key)
 }
 
 return result
};