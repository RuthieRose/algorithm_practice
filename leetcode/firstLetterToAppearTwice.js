// https://leetcode.com/problems/first-letter-to-appear-twice/

var repeatedCharacter = function(s) {
 let charSet = new Set()
 for (let i = 0; i < s.length; i++) {
     let char = s[i]
     if (!charSet.has(char)) charSet.add(char)
     else if (charSet.has(char)) return char
 }
};