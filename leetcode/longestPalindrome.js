var longestPalindrome = function(s) {
 if (s.length === 1) return s.length;
 
 let letters = {};
 let oddLetters = [];
 
 for (let i = 0; i < s.length; i++) {
     let letter = s[i];
     
     if (letters[letter]) letters[letter]++
     else letters[letter] = 1;
 }
 
 for (let key in letters) {
     if (letters[key] % 2 === 1) {
         oddLetters.push(key)
     }
 }
 
 let numOfLetters = (Object.values(letters)).reduce((a,b) => a +b)
 
 if (oddLetters.length === 1 || oddLetters.length === 0) return numOfLetters;
 else return numOfLetters - (oddLetters.length - 1)
};