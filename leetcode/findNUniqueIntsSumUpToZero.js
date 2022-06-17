// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

var sumZero = function(n) {
    
 let array = new Array(n).fill(0)
 
 for (let i = 0; i < Math.floor(n/2); i++) {
     array[i] = (i+1)*10
     array[n-1-i] = -array[i]
 }
 
 return array
};