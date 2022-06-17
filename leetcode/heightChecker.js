// https://leetcode.com/problems/height-checker/

var heightChecker = function(heights) {
    
 let expected = [...heights]
 expected = expected.sort((a,b) => a - b)
 
 let off = 0
 
 for (let i = 0; i < heights.length; i++) {
     if (expected[i] !== heights[i]) off++
 }
 
 return off
};