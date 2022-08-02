// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/

var countCharacters = function(words, chars) {
    
 let sum = 0
 let frequency = {}
 
 for (let i = 0; i < chars.length; i++) {
     
     let char = chars[i]
     if (frequency[char]) frequency[char]++
     else frequency[char] = 1
 }
 
 words.forEach(word => {
     
     let wordFrequency = {}
     
     for (let i = 0; i < word.length; i++) {
         
         let letter = word[i]
         if (wordFrequency[letter]) wordFrequency[letter]++
         else wordFrequency[letter] = 1
         
     }
     
     let letters = Object.keys(wordFrequency)
     let all = true
     for (let i = 0; i < letters.length; i++) {
         let letter= letters[i]
         if (frequency[letter] < wordFrequency[letter] || frequency[letter] === undefined) {
             all = false
         }
     }
     
     if (all) sum += word.length 
 })
 
 return sum
};