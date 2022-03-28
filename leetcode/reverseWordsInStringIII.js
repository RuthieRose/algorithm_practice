// https://leetcode.com/problems/reverse-words-in-a-string-iii/

var reverseWords = function(s) {
    
 s = s.split(' ');
 
 let reverseArr = [];
 
 s.forEach(word => {
     reverseArr.push(word.split('').reverse().join(''));
     
 })
 
 return reverseArr.join(' ');
};