// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

var countNegatives = function(grid) {
    
 let negatives = grid[0].length * grid.length
 
 for (let row of grid) {
     for (let num of row) {
         if (num > -1) negatives--
         else break;
     }
 }
 
 return negatives
};