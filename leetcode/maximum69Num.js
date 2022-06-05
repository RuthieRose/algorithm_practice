// https://leetcode.com/problems/maximum-69-number/

var maximum69Number  = function(num) {
    
 let numString = num.toString()
 
 if (!numString.includes('6')) return num
 
 return +numString.replace(/[6]/, '9')
 
};