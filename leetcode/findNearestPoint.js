// https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/

var nearestValidPoint = function(x, y, points) {
 let mapped = points.map((item, index) => {
     let filter = item[0] === x || item[1] === y
     let manhattan = Math.abs(item[0]-x) + Math.abs(item[1]-y)
     return {index, filter, manhattan}
 }).sort((a,b) => a.manhattan - b.manhattan)
 
 for (let i = 0; i < mapped.length; i++) {
     let item = mapped[i]
     if (item.filter) return item.index
 }
 return -1
};