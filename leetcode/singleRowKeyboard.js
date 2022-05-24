// https://leetcode.com/problems/single-row-keyboard/

var calculateTime = function(keyboard, word) {
 let sum = 0;
 sum += Math.abs(0 - keyboard.indexOf(word[0]))
 for (let i = 1; i < word.length; i++) {
     distance = Math.abs(keyboard.indexOf(word[i]) - keyboard.indexOf(word[i -1]))
     sum += distance;
 }
 return sum;
};