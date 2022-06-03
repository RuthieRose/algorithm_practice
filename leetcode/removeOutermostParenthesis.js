// https://leetcode.com/problems/remove-outermost-parentheses/

var removeOuterParentheses = function(s) {
    
 let stack = []
 let outer = false
 let stackOpenCount = 0
 let stackCloseCount = 0
 
 for (let i = 0; i < s.length; i++) {
     
     let curr = s[i]
     
     if (curr === '(' && outer === true) {
         stack.push(curr)
         stackOpenCount++
     }
     else if (curr === '(') outer = true
     else if (curr === ')' && outer === true && stackOpenCount === stackCloseCount) {
         outer = false
         stackOpenCount = 0
         stackCloseCount = 0
     }
     else if (curr === ')') {
         stack.push(curr)
         stackCloseCount++
     }
 }
 
 return stack.join('')
 
};