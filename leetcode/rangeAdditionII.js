// https://leetcode.com/problems/range-addition-ii/

var maxCount = function(m, n, ops) {
    
 if (ops.length === 0) return m * n;
 
 for (let op of ops) {
     m = Math.min(m, op[0]);
     n = Math.min(n, op[1]);
 }
 
 return m*n;
 
};