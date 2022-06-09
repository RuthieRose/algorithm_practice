// https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/

var oddCells = function(m, n, indices) {
    
 let matrix = []
 for (let i = 0; i < m; i++) {
     let row = new Array(n).fill(0)
     matrix.push(row)
 }
 indices.forEach(index => {
     for (let i = 0; i < n; i++) {
         matrix[index[0]][i]++
     }
     for (let i = 0; i < matrix.length; i++) {
         matrix[i][index[1]]++
     }
 })
 
 matrix = matrix.flat()
 
 return matrix.reduce((a,b) => b % 2 === 1 ? a += 1 : a += 0,  0)
};