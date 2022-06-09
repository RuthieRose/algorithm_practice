// https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/

var countGoodRectangles = function(rectangles) {
    
 let squares = rectangles.map(rectangle => Math.min(...rectangle))
 return squares.filter(square => square === Math.max(...squares)).length
 
};