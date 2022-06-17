// https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/

var sumOfDigits = function(nums) {
    
 let min = Math.min(...nums)
 min = min.toString().split('')
 min = min.reduce((a,b) => +a + +b)
 
 return min % 2 === 0 ? 1 : 0
 
};