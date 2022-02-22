

var longestPalindrome = function(s) {

 if (s.length === 0 || s.length === 1) return s;
 
 let longestPal = '';
 let workingPalindrome = '';

 function testPalindrome(str) {
   let len = Math.floor(str.length/2)
   for (let i = 0; i < len; i++) {
    // console.log(str[i], str[str.length - 1 -i])
    if (str[i] !== str[str.length - 1 -i]) {
     return false
    }
   }
   return true;
 }

 for (let i = 0; i < s.length; i++) {
  for (let j = s.length; j > i; j--) {
    let str = s.slice(i,j);
    if (testPalindrome(str)) {
     workingPalindrome = str;
     if (workingPalindrome.length > longestPal.length) {
      longestPal = workingPalindrome;
     }
     break;
    }
  }
 }
   return longestPal; 
};

console.log(longestPalindrome('bab'))
console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('aparadar'))