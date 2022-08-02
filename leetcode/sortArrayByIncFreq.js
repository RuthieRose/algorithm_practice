// https://leetcode.com/problems/sort-array-by-increasing-frequency/

var frequencySort = function(nums) {
    
 let sorted = []
 
 let frequency = {}
 
 for (let i = 0; i < nums.length; i++) {
     let num = nums[i]
     
     if (frequency[num]) frequency[num]++
     else frequency[num] = 1
 }
 
 let entries = Object.entries(frequency)
 
 entries.sort((a,b) => b[0] - a[0])
 entries.sort((a,b) => a[1] - b[1])
 
 while (entries.length) {
     let entry = entries.shift()
     for (let i = 0; i < entry[1]; i++) {
         sorted.push(+entry[0])
     }
 }
 
 return sorted

};