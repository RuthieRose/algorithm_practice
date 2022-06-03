// https://leetcode.com/problems/matrix-diagonal-sum/

var diagonalSum = function(mat) {
 let sum = 0
 for (let i = 0; i < mat.length; i++) {
     sum += mat[i][i]
     sum += mat[i][mat.length - 1 - i]
 }
 if (mat.length % 2 === 1) {
     let midpoint = (mat.length - 1)/2
     sum -= mat[midpoint][midpoint]
 }
 return sum
};