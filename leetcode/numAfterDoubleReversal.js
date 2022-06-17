// https://leetcode.com/problems/a-number-after-a-double-reversal/

var isSameAfterReversals = function(num) {
    
 let numString = num.toString().split('').reverse().join('')
 numString = +numString
 numString = numString.toString().split('').reverse().join('')
 
 return +numString === num
 
};