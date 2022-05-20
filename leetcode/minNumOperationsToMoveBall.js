// https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/

var minOperations = function(boxes) {
 console.log(boxes)
 let moves = []
 let boxMap = []
 
 for (let i = 0; i < boxes.length; i++) {
     if (boxes[i] == 1) boxMap.push(i)
 }
 
 for (let i = 0; i < boxes.length; i++) {
     let sum = 0;
     boxMap.forEach(ball => sum += Math.abs(ball - i))
     moves.push(sum)
 }
 return moves
};