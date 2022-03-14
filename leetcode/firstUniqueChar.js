var firstUniqChar = function(s) {
    
 s = s.split('')
 
 for (let i = 0; i < s.length; i++) {
     if (s.indexOf(s[i]) === i && s.lastIndexOf(s[i]) === i) {
         return i
     }
 }

 return -1
};