// https://leetcode.com/problems/sorting-the-sentence/

var sortSentence = function(s) {
    
 sArr = s.split(' ')
 let sentence = []
 
 sArr.forEach(word => {
     let filteredWord = ''
     let index;
     for (let i = 0; i < word.length; i++) {
         if (word.charCodeAt(i) >= 48 && word.charCodeAt(i) <= 57) {
             index = word[i]
         }
         else filteredWord += word[i]
     }
     sentence[index-1] = filteredWord
 })
 
 return sentence.join(' ');
};