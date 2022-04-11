// https://leetcode.com/problems/shift-2d-grid/

var shiftGrid = function(grid, k) {
    
 let gridLength = grid.length * grid[0].length;
 k= k % gridLength;
 
 if (k === 0) return grid;
 
 const shiftGrid = () => { 
     for (let i = 0; i < grid.length; i++) {
     
     let tempGrid = grid[i];
     let tempNum = tempGrid.pop();
     
     if (i !== grid.length -1) {
         grid[i+1].unshift(tempNum);
     } else {
         grid[0].unshift(tempNum)
     }
     }
 }
 
 while (k > 0) {
     shiftGrid();
     k--;
 }
 
 return grid;
};