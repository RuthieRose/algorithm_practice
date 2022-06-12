// https://leetcode.com/problems/increasing-decreasing-string/

var sortString = function(s) {
    
 let result = ''
 
 let set = Array.from(new Set(s)).sort((a,b) => a.localeCompare(b))
 
 let letters = {}
 
 for (let i = 0; i < s.length; i++) {
     let char = s[i]
     if (letters[char]) letters[char]++
     else letters[char] = 1
 }
 
 while (result.length < s.length) {
    for (let i = 0; i < set.length; i++) {  
       if (letters[set[i]] > 0) {
           result += set[i]
           letters[set[i]]--
         }
   
 }
 
    for (let i = set.length - 1; i >= 0; i--) {
      if (letters[set[i]] > 0) {
         result += set[i]
         letters[set[i]]--
     }
 }
 }
 
return result
};