// https://leetcode.com/problems/counting-words-with-a-given-prefix/

var prefixCount = function(words, pref) {
    
 let num = 0
 let prefixLength = pref.length 
 
 words.forEach(word => word.slice(0,prefixLength) === pref ? num++ : '')
 
 return num
};