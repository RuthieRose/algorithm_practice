// https://leetcode.com/problems/number-of-islands/

var numIslands = function(grid) {
    
 let m = grid.length
 let n = grid[0].length
 
 let islands = 0
 
 function dfs(grid, r, c) {
     
     if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] == 0) {
         return
     }

     grid[r][c] = 0
     
     dfs(grid, r-1, c)
     dfs(grid, r+1, c)
     dfs(grid, r, c-1)
     dfs(grid, r, c+1)
 }
 
 for (let i = 0; i < m; i++) {
     for (let j = 0; j < n; j++) {
         if (grid[i][j] == 1) {
             islands++
             dfs(grid, i, j)
         }
     }
 }
 
 return islands
 
};