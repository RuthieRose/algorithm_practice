// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

var finalValueAfterOperations = function(operations) {
 let x = 0;
 
 for (let i = 0; i < operations.length; i++) {
     let operation = operations[i];
     if (operation === "--X" || operation === "X--") x--;
     if (operation === "++X" || operation === "X++") x++;
 }
 
 return x;
};