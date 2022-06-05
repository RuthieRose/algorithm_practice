// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

var firstPalindrome = function(words) {
    
 for (let i = 0; i < words.length; i++) {
     let word = words[i]
     let palindrome = true
     for (let j = 0; j < word.length/2; j++) {
         if (word[j] !== word[word.length - j - 1]) palindrome = false
     }
     if (palindrome) return word
 }
 
 return ''
};