// https://leetcode.com/problems/largest-local-values-in-a-matrix/

var largestLocal = function(grid) {
    
 let n = grid.length
 
 let generated = new Array(n-2).fill(null).map(_ => new Array(n-2))
 let pointer1 = 0
 let pointer2 = 0
 
 for (let i = 0; i < grid.length-2; i++) {
     let currentArray = []
     for (let j = 0; j < grid[0].length - 2; j++) {
         currentArray.push(grid[i][j], grid[i+1][j], grid[i+2][j], grid[i][j+1], grid[i+1][j+1], grid[i+2][j+1], grid[i][j+2], grid[i+1][j+2], grid[i+2][j+2])
         let max = Math.max(...currentArray)
         generated[pointer1][pointer2] = max
         if (pointer2 < n-3) pointer2++
         else {
             pointer1++
             pointer2 = 0
        
         }
         currentArray = []
     }
 }
 return generated
};