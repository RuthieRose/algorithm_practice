// https://leetcode.com/problems/count-the-number-of-consistent-strings/

var countConsistentStrings = function(allowed, words) {
 let count = 0;
 
 words.forEach(word => {
     word = word.split('');
     let consistent = word.every(letter => allowed.includes(letter));
     consistent ? count++ : null;
 })
 
 return count;
};