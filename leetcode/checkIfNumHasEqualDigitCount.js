// https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/

var digitCount = function(num) {
   
 let frequency = {}
 let match = true
 
 for (let i = 0; i < num.length; i++) {
     frequency[i] = 0
 }
  
 for (let i = 0; i < num.length; i++) {
     let n = parseInt(num[i])
     if (frequency[n] !== undefined) frequency[n]++
     else frequency[n] = 0
 }
  
 for (let i = 0; i < num.length; i++) {
     if (frequency[i] != num[i]) match = false
 }
  
  return match
};