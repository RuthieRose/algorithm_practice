// https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/

var countLetters = function(s) {
    
 if (s.length === 1) return 1
 
 let count = 0
 
 for (let i = 0; i < s.length; i++) {
     
     let char = s[i]
     count++
     
     let j = i+1
     
     while (j < s.length) {
         if (char === s[j]) {
             count++
             j++
         }
         else break
     }
     
 }
 
 return count
};