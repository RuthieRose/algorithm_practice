// https://leetcode.com/problems/split-a-string-in-balanced-strings/

var balancedStringSplit = function(s) {
    

 let currL = ''
 let currR = ''
         
 let count = 0
 
 for (let i = 0; i < s.length; i++) {
     
     let char = s[i]
     if (char === 'L') {
        currL += char
     }
     if (char === 'R') {
        currR += char
     }
     if (currL.length  > 0 && currR.length > 0 && currL.length == currR.length) {
         count++
         currL = ''
         currR = ''
     }
 }
 
 return count;
 
};