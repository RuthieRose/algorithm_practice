var isSubsequence = function(s, t) {
 if (s.length === 0) return true;
 if (t.length === 0) return false;
 
 let subStr = s.split('');
 let str = t.split('');
 
 while (str.length > 0) {
     console.log(subStr, str)
     while (str[0] !== subStr[0]) {
         str.shift();
         if (str.length === 0) break;
     }
     
     if (str[0] === subStr[0]) {
         console.log(str[0], subStr[0])
         str.shift();
         subStr.shift();
     }
     if (subStr.length === 0) break;

 }

 if (subStr.length === 0) return true;
 else return false;
};

console.log(isSubsequence('axc', 'ahbgdc'))