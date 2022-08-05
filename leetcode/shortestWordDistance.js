// https://leetcode.com/problems/shortest-word-distance-ii/

var WordDistance = function(wordsDict) {
 this.dict = {}
 for (let i = 0; i < wordsDict.length; i++) {
     let word = wordsDict[i]
     if (this.dict[word]) this.dict[word].push(i)
     else this.dict[word] = [i]
 }
};

/** 
* @param {string} word1 
* @param {string} word2
* @return {number}
*/
WordDistance.prototype.shortest = function(word1, word2) {
 
 let words1 = this.dict[word1]
 let words2 = this.dict[word2]
 
 let shortest = Number.MAX_VALUE
 
 for (let i = 0; i < words1.length; i++) {
     for (let j = 0; j < words2.length; j++) {
         shortest = Math.min(shortest, Math.abs(words1[i] - words2[j]))
     }
 }
 
 return shortest
};