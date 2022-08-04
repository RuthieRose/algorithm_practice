// https://leetcode.com/problems/flood-fill/

var floodFill = function(image, sr, sc, color) {
    
 let row = image.length - 1
 let col = image[0].length - 1
 
 let starting = image[sr][sc]
 
 function dfs(sr, sc) {
     
     if (sr < 0 || sr > row || sc < 0 || sc > col || image[sr][sc] !== starting || image[sr][sc] === color) {
         return
     }
     
     image[sr][sc] = color
     
     dfs(sr - 1, sc)
     dfs(sr + 1, sc)
     dfs(sr, sc - 1)
     dfs(sr, sc + 1)
 }
 
 dfs(sr, sc)
 
 return image
};