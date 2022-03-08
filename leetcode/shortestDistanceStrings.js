var shortestDistance = function(wordsDict, word1, word2) {
 let word1Idx = []
 let word2Idx = []
 
 wordsDict.forEach((word, index) => {
     if (word === word1) word1Idx.push(index);
     if (word === word2) word2Idx.push(index);
 })
 
 let distance = wordsDict.length;
 
 for (let i = 0; i < word1Idx.length; i++) {
     for (let j = 0; j < word2Idx.length; j++) {
         distance = Math.min(distance, Math.abs(word2Idx[j]-word1Idx[i]))
     }
 }

 return distance;
};