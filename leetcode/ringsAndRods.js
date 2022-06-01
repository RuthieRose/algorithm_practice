// https://leetcode.com/problems/rings-and-rods/

var countPoints = function(rings) {
 let rods = {}
 let count = 0
 
 for (let i = 1; i < rings.length; i+=2) {
     let rod = rings[i]
     if (rods[rod]) rods[rod].push(rings[i-1])
     else rods[rod] = [rings[i-1]]
 }
 
 for (let rod in rods) {
     if (rods[rod].includes('R') && rods[rod].includes('B') && rods[rod].includes('G')) count++
 }
 
 return count
};