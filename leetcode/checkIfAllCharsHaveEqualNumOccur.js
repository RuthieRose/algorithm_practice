// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

var areOccurrencesEqual = function(s) {
    
 let chars = {}
 
 for (let i = 0; i < s.length; i++) {
     let char = s[i]
     if (chars[char]) chars[char]++
     else chars[char] = 1
 }
 
 let counts = Object.values(chars)

 return Math.min(...counts) === Math.max(...counts)
};