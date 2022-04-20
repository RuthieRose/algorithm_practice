// https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/

var isCovered = function(ranges, left, right) {
    
 let values = [];
 
 for (let i = 0; i < ranges.length; i++) {
     let range = ranges[i];
     for (let j = range[0]; j <= range[1]; j++) {
         values.push(j)
     }
 }
 
 for (let i = left; i <= right; i++) {
     if (!values.includes(i)) return false;
 }
 
 return true;
};