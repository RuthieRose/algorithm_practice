// https://leetcode.com/problems/unique-morse-code-words/

var uniqueMorseRepresentations = function(words) {
    
 if (words.length === 1 || words.length === 0) return words.length
 
 let morseTable = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
 
 let wordsMap = {}
 
 words.forEach(word => {
     let morseWord = ''
     for (let i = 0; i < word.length; i++) {
         let letter = word[i]
         let index = letter.charCodeAt(0) - 97
         morseWord += morseTable[index]
     }

     if (wordsMap[morseWord]) wordsMap[morseWord]++
     else wordsMap[morseWord] = 1
 })
 

 return Object.keys(wordsMap).length
};