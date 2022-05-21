// https://leetcode.com/problems/max-increase-to-keep-city-skyline/

var maxIncreaseKeepingSkyline = function(grid) {
 let gridJ = []
 let sum = 0;
 
 function createGridJ() {

    for (let j = 0; j < grid[0].length; j++) {
          let rowI = [];
          for (let i = 0; i < grid.length; i++) {
            rowI.push(grid[i][j])
        }
        gridJ.push(rowI)
    }
 }
 createGridJ()
 
 for (let i = 0; i < grid.length; i++) {
     let newRow = [];
     for (let j = 0; j < grid[i].length; j++) {
         let heightDiff = Math.min(Math.max(...grid[i]), Math.max(...gridJ[j])) - grid[i][j]
         if (heightDiff > 0) sum += heightDiff
     }
 }
 return sum;
};