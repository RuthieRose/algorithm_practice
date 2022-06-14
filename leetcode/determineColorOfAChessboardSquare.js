// https://leetcode.com/problems/determine-color-of-a-chessboard-square/

var squareIsWhite = function(coordinates) {
    
 if (coordinates[0] === 'a' || coordinates[0] === 'c' || coordinates[0] === 'e' || coordinates[0] === 'g') {
     if (coordinates[1] % 2 === 0) return true
     else return false
 }
 else if (coordinates[1] % 2 === 1) return true
     else return false
};