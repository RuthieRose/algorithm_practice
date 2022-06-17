// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/

var generateTheString = function(n) {
    
 let string = ''
 
 if (n % 2 === 1) {
     for (let i = 0; i < n; i++) {
         string += 'a'
     }
     return string
 }
 
 else {
     for (let i = 0; i < n-1; i++) {
         string += 'a'
     }
     string += 'b'
     return string
 }
};