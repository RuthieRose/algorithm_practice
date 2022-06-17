// https://leetcode.com/problems/delete-operation-for-two-strings/

var minDistance = function(word1, word2) {
    
 let m = word1.length, n = word2.length;
 
 let memo = new Array(m + 1).fill().map(item => new Array(n + 1).fill(-1))
 
 const getLCS = (word1, word2, m, n, memo) => {
     
     if (m === 0 || n === 0) return 0
     
     if (memo[m][n] > 0) return memo[m][n]
     
     if (word1[m-1] === word2[n - 1]) memo[m][n] = 1 + getLCS(word1, word2, m - 1, n - 1, memo)
     
     else memo[m][n] = Math.max(getLCS(word1, word2, m, n - 1, memo), getLCS(word1, word2, m - 1, n, memo))
     
     return memo[m][n]
 }
 
   return word1.length + word2.length - 2 * getLCS(word1, word2, m, n, memo)

};