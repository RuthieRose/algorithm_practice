// https://leetcode.com/problems/count-common-words-with-one-occurrence

var countWords = function(words1, words2) {
    
 let count = 0
 let wordBank = {}
 let pool = []
 
 for (let i = 0; i < words1.length; i++) {
     let word = words1[i]
     if (wordBank[word]) wordBank[word]++
     else wordBank[word] = 1
 }
 
 for (let key in wordBank) {
     if (wordBank[key] === 1) pool.push(key)
 }
 
 for (let i = 0; i < pool.length; i++) {
     let word = pool[i]
     if (words2.includes(word) && words2.indexOf(word) === words2.lastIndexOf(word)) count++
 }
 return count
};

