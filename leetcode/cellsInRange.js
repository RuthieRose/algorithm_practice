// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/

var cellsInRange = function(s) {
 let colStart = s.charCodeAt(0)
 let colEnd = s.charCodeAt(3)
 let rowStart = +s[1]
 let rowEnd = +s[4]
 
 let cells = []
 
 if (colStart === colEnd) {
     for (let i = rowStart; i <= rowEnd; i++) {
         cells.push(`${s[0]}${i}`)
     }
 }
 else if (rowStart === rowEnd) {
     for (let i = colStart; i <= colEnd; i++) {
         cells.push(`${String.fromCharCode(i)}${rowStart}`)
     }
 }
 else {
     for (let i = colStart; i <= colEnd; i++) {
         let col = String.fromCharCode(i);
         for (let j = rowStart; j <= rowEnd; j++) {
             cells.push(`${col}${j}`)
         }
     }
 }
 return cells;
};