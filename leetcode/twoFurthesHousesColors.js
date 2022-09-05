// https://leetcode.com/problems/two-furthest-houses-with-different-colors/


var maxDistance = function(colors) {
    
 if (colors.length === 2) return 1
 
 let n = colors.length
 
 if (colors[0] !== colors[n-1]) return n-1
 
 let pointer1 = 0
 let pointer2 = n-1
 
 while (colors[0] === colors[pointer1]) pointer1++
 while (colors[n-1] === colors[pointer2]) pointer2--
 
 return Math.max(Math.abs(0 - pointer2), Math.abs((n-1) - pointer1))
};