// https://leetcode.com/problems/degree-of-an-array/

var findShortestSubArray = function(nums) {
    
 if (nums.length === 1) return 1
 
 let frequency = {}
 
 for (let i = 0; i < nums.length; i++) {
     let num = nums[i]
     if (frequency[num]) frequency[num]++
     else frequency[num] = 1
 }

 let minLength = Number.MAX_VALUE
 
 let values = []
 
 let degree = (Object.values(frequency)).sort((a,b) => b-a )[0]
 
 for (let num in frequency) {
     if (frequency[num]== degree) {
         values.push(+num)
     }
 }
 
 let indeces = {}
 
 for (let i = 0; i < nums.length; i++) {
     let num = nums[i]
     if (values.includes(num)) {
         if (indeces[num]) {
             indeces[num].push(i)
         }
         else indeces[num] = [i]
     }
 }
 
 for (let num in indeces) {
     let length = 1 + indeces[num][indeces[num].length - 1] - indeces[num][0]
     minLength = Math.min(minLength, length)
 }
 
 return minLength
};