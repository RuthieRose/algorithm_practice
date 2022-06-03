// https://leetcode.com/problems/range-sum-query-2d-immutable/

var NumMatrix = function(matrix) {
 this.numsMatrix = matrix;
 console.log(this.numsMatrix)
};

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
 let sum = 0;
 for (let i = row1; i <= row2; i++) {
     for (let j = col1; j <= col2; j++) {
         sum+= this.numsMatrix[i][j]
     }
 }
 return sum
};