// https://leetcode.com/problems/remove-palindromic-subsequences/

var removePalindromeSub = function(s) {
        
 if (s.length === 1) return 1
 
 let checkPalindrome = string => {
     
     let palindrome = true
     
     for (let i = 0; i < Math.floor(string.length/2); i++) {
         if (string[i] !== string[string.length - 1 - i] ) palindrome = false
     }
     
     return palindrome
     
 }
 
 if (checkPalindrome(s)) return 1
 else return 2
};