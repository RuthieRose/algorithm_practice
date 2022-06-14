// https://leetcode.com/problems/minimum-falling-path-sum/
// dynamic programming

var minFallingPathSum = function(matrix) {
    
 let minFallingSum = Number.MAX_VALUE
 
 // Map has to be used rather than filling a row and then filling the matrix with those rows, because the values for each row will be the same (reference to object rather than value)
 let memo = new Array(matrix.length).fill().map(item => new Array(matrix.length).fill(null))
 
 const findMinPath = (matrix, row, col, memo) => {

     if (col < 0 || col === matrix.length) return Number.MAX_VALUE
     if (row === matrix.length - 1) return matrix[row][col]     
     if (memo[row][col]) return memo[row][col]
     
     let left = findMinPath(matrix, row + 1, col, memo)
     let middle = findMinPath(matrix, row + 1, col + 1, memo)
     let right = findMinPath(matrix, row + 1, col - 1, memo)
     
     memo[row][col] = Math.min(left, Math.min(middle, right)) + matrix[row][col]
     
     return memo[row][col]
     
 }
 
 for (let i = 0; i < matrix.length; i++) {
     minFallingSum = Math.min(minFallingSum, findMinPath(matrix, 0, i, memo))
 }
 console.log(memo)
 return minFallingSum
};