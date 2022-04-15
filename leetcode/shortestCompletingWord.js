// https://leetcode.com/problems/shortest-completing-word/

var shortestCompletingWord = function(licensePlate, words) {
    
 licensePlate = licensePlate.toLowerCase().split('').filter(char => char.match(/[a-z]/));
 licensePlate = licensePlate.sort((a,b) => a.localeCompare(b));
 let matches = [];
 
 for (i = 0; i < words.length; i++) {
    let word = words[i];
    let licensePlateCopy = [...licensePlate];
    let wordArray = word.split('');
    wordArray = wordArray.sort((a,b) => a.localeCompare(b));
    while (wordArray.length > 0) {
        if (wordArray[0] === licensePlateCopy[0]) {
            wordArray.shift();
            licensePlateCopy.shift();
        } else {
            if (wordArray.length > 0) wordArray.shift();
        }
    }
     if (licensePlateCopy.length === 0) matches.push(word);   
    
 }
 
 if (matches.length === 1) return matches[0];
 else {
     let shortest = 1001;
     matches.forEach(word => {
         shortest = Math.min(shortest, word.length);
     });
     for (let i = 0; i < matches.length; i++) {
         if (matches[i].length === shortest) return matches[i];
     }
 }
 
};