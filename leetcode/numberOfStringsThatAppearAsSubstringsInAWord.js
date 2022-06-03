// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/

var numOfStrings = function(patterns, word) {
    
 let num = 0
 patterns.forEach(pattern => word.includes(pattern) ? num++ : '')
 return num
};