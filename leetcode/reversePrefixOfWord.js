// https://leetcode.com/problems/reverse-prefix-of-word/

var reversePrefix = function(word, ch) {
    
 if (!word.includes(ch)) return word
 
 let newWord = ''
 let idx = word.indexOf(ch)
 
 for (let i = idx; i >= 0; i--) newWord += word[i]
  
 for (let i = idx+1; i < word.length; i++) newWord += word[i]
 
 return newWord
 
};