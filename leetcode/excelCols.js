// This is not DRY and I need to refactor it... another day

var titleToNumber = function(columnTitle) {
 if (columnTitle.length === 1) return columnTitle.charCodeAt(0) - 64;

 else if (columnTitle.length === 2) {
    return (columnTitle.charCodeAt(0) - 64)* 26 + (columnTitle.charCodeAt(1) - 64)
 }

 else if (columnTitle.length === 3) {
     return ((columnTitle.charCodeAt(0) - 64) * 26*26 + (columnTitle.charCodeAt(1) - 64) * 26 + (columnTitle.charCodeAt(2) - 64))
 }

 else if (columnTitle.length === 4) {
  return ((columnTitle.charCodeAt(0) -64) * 26**3 + (columnTitle.charCodeAt(1) - 64) * 26*26 + (columnTitle.charCodeAt(2) - 64) * 26 + (columnTitle.charCodeAt(3) - 64))
 }

 else if (columnTitle.length === 5) {
  return ((columnTitle.charCodeAt(0) -64) * 26**4 + (columnTitle.charCodeAt(1) -64) * 26**3 + (columnTitle.charCodeAt(2) - 64) * 26*26 + (columnTitle.charCodeAt(3) - 64) * 26 + (columnTitle.charCodeAt(4) - 64))
 }

 else if (columnTitle.length === 6) {
  return ((columnTitle.charCodeAt(0) -64) * 26**5 + (columnTitle.charCodeAt(1) -64) * 26**4 + (columnTitle.charCodeAt(2) -64) * 26**3 + (columnTitle.charCodeAt(3) - 64) * 26*26 + (columnTitle.charCodeAt(4) - 64) * 26 + (columnTitle.charCodeAt(5) - 64))
 }

 else if (columnTitle.length === 7) {
  return ((columnTitle.charCodeAt(0) -64) * 26**6 + (columnTitle.charCodeAt(1) -64) * 26**5 + (columnTitle.charCodeAt(2) -64) * 26**4 + (columnTitle.charCodeAt(3) -64) * 26**3 + (columnTitle.charCodeAt(4) - 64) * 26*26 + (columnTitle.charCodeAt(5) - 64) * 26 + (columnTitle.charCodeAt(6) - 64))
 }

};

console.log(titleToNumber("FXSHRXW"))