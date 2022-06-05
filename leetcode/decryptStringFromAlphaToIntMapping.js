// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

var freqAlphabets = function(s) {
    
 let string = ''
 for (let i = 0; i < s.length; i++) {
     if (s[i+2] === '#') {
         tempString = s[i] + s[i+1]
         string+= String.fromCharCode(+tempString + 96)
         i+=2
     }
     else string += String.fromCharCode(+s[i] + 96)
 }
 
 return string;
};