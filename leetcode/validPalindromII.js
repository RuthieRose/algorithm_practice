
var validPalindrome = function(s) {
    
 let skip = false;
 
 let pointer1 = 0;
 let pointer2 = s.length - 1;
 
 while (pointer1 < pointer2) {
      if (s[pointer1] === s[pointer2]) {
          pointer1++;
          pointer2--;
      } else if (s[pointer1+1] === s[pointer2] && skip === false) {
          pointer1+=2;
          pointer2--;
          skip = true;
      } else if (s[pointer1] === s[pointer2-1] && skip === false) {
          pointer1++;
          pointer2-=2;
          skip = true;
      } else break;
  }

 if (pointer1 >= pointer2 || pointer1 === pointer2) return true;
 
 pointer1 = 0;
 pointer2 = s.length - 1;
 skip = false;
 
 while (pointer1 < pointer2) {
     if (s[pointer1] === s[pointer2]) {
          pointer1++;
          pointer2--;
      } else if (s[pointer1] === s[pointer2-1] && skip === false) {
          pointer1++;
          pointer2-=2;
          skip = true;
      } else return false;
  }
 
  return true;
 
};