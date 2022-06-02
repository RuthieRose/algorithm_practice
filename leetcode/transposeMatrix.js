// https://leetcode.com/problems/transpose-matrix/

var transpose = function(matrix) {
    
 let newMatrix = []
 
 for (let i = 0; i < matrix[0].length; i++) {
     let row = []
     for (let j = 0; j < matrix.length; j++) {
         row.push(matrix[j][i])
     }
     newMatrix.push(row)
 }
 
 return newMatrix
};
