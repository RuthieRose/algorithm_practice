// https://leetcode.com/problems/merge-strings-alternately/

var mergeAlternately = function(word1, word2) {
    
 word1 = word1.split('')
 word2 = word2.split('')
 
 let merged = ''
 
 while (word1.length > 0 && word2.length > 0) {
     
     merged += word1.shift()
     merged += word2.shift()
 }
 
 if (word1.length > 0) merged += word1.join('')
 if (word2.length > 0) merged += word2.join('')
 
 return merged
};