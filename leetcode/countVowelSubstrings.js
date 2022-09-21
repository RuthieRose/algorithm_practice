// https://leetcode.com/problems/count-vowel-substrings-of-a-string/

var countVowelSubstrings = function(word) {
 let vowels = 'aeiou'
 let count = 0

 
 for (let i = 0; i < word.length; i++) {
       let substring = ''
       let letter = word[i]
       if (vowels.includes(letter)) {
           substring += letter
           for (let j = i+1; j < word.length; j++) {
               let nextLetter = word[j]
               if (vowels.includes(nextLetter)) {
                   substring += nextLetter
                   if (substring.length >= 5) {
                       let hasAll = true
                       for (let k = 0; k < vowels.length; k++) {
                           let vowel = vowels[k]
                           if (!substring.includes(vowel)) hasAll = false
                       }
                       if (hasAll) count++
                   }
               }
               else break
           }
       }
 }
 return count
};