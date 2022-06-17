// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

var findNumbers = function(nums) {
    
 let evens = 0
 
 nums.forEach(num => {
     if (num.toString().length % 2 === 0) evens++
 })
 
 return evens
};