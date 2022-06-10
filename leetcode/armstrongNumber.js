// https://leetcode.com/problems/armstrong-number/

var isArmstrong = function(n) {
    
 let nString = n.toString()
 let k = nString.length 
 let sum = 0
 nString.split('').forEach(num => sum += (+num) ** k)
 
 return sum === n
};