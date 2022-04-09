// https://leetcode.com/problems/binary-number-with-alternating-bits/

var hasAlternatingBits = function(n) {
 let binary = n.toString(2);
 if (binary.length === 1) return true;
 for (let i = 1; i < binary.length; i++) {
     let digit = binary[i];
     let prevDigit = binary[i-1];
     if (digit === prevDigit) return false;
 }
 return true;
};