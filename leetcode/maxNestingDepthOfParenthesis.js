// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

var maxDepth = function(s) {
 let maxDepth = 0;
 let left = 0;
 let right = 0;
 for (let i = 0; i < s.length; i++) {
     if (s[i] === "(") {
         left++
         maxDepth = Math.max(maxDepth, left - right)
     }
     if (s[i] === ")") right++
 }
 return maxDepth
};