// https://leetcode.com/problems/sum-of-even-numbers-after-queries/

var sumEvenAfterQueries = function(nums, queries) {
    
 let output = []
 
 for (let i = 0; i < queries.length; i++) {
     let index = queries[i][1]
     let value = queries[i][0]
     let newValue = nums[index] + value
     nums[index] = newValue
     
     let answer = 0
     
     for (let j = 0; j < nums.length; j++) {
         let num = nums[j]
         if (num % 2 === 0) answer += num
     }
     
     output.push(answer)
 }
 
 return output
};