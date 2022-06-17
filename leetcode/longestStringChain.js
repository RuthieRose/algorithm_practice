// https://leetcode.com/problems/longest-string-chain/

var longestStrChain = function(words) {
    
 let wordSet = new Set(words)
 
 let memo = {}
 
 let result = 0
 
 const getChain = (word, memo) => {
     
     let maxLength = 1
         
     if (memo[word]) return memo[word]
     else {

         for (let i = 0; i < word.length; i++) {
             let newWord = word.slice(0,i) + word.slice(i+1)
             if (wordSet.has(newWord)) {
                 let currentLength = 1 + getChain(newWord, memo)
                  maxLength = Math.max(maxLength, currentLength)
             }

         }
           memo[word] = maxLength
         return maxLength
     }
 }
 
for (let word of words) result = Math.max(result, getChain(word, memo))
return result

};