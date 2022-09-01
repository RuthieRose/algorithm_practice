// https://leetcode.com/problems/count-square-sum-triples/

var countTriples = function(n) {
    
 let squares = {}
 let count = 0
 
 for (let i = 1; i <= n; i++) {
     squares[i] = i ** 2
 }
 for (let i = 1; i < n; i++) {
     for (let j = i+1; j <= n; j++) {
         let sum = squares[i] + squares[j]
         for (let key in squares) {
             if (squares[key] === sum) {
                 count+=2
             }
         }
     }
 }
 
 return count
};

