// https://leetcode.com/problems/buildings-with-an-ocean-view/

var findBuildings = function(heights) {
    
 let hasView = []
 
 let toRight = 0
 
 for (let i = heights.length - 1; i >=0; i--) {
     let height = heights[i]
     if (height > toRight) {
         hasView.unshift(i)
         toRight = Math.max(height, toRight)
     }
 }
 
 return hasView
};