// https://leetcode.com/problems/di-string-match/

var diStringMatch = function(s) {
    
 let n = s.length + 1  
 let array = []
 let perm = []
 
 for (let i = 0; i < n; i++) array[i] = i
  
 let pointer1 = 0
 let pointer2 = n-1
 let i = 0
 
 while (i < n-1) {

     if (s[i] === 'I') {
         perm.push(array[pointer1])
         pointer1++
      }
  
      if (s[i] === 'D') {
         perm.push(array[pointer2])
         pointer2--
      }
     i++
 }
  
 perm.push(array[pointer1])
 return perm
};