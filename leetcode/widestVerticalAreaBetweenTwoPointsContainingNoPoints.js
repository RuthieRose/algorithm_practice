// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/

var maxWidthOfVerticalArea = function(points) {
 let maxWidth= 0
 points = points.sort((a,b) => a[0] - b[0])
 points.forEach((item, index) => {
     if (index < points.length - 1) maxWidth = Math.max(maxWidth, points[index+1][0] - item[0])
 })
 return maxWidth
};