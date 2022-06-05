// https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/

var executeInstructions = function (n, startPos, s) {

 let moves = []

 for (let i = 0; i < s.length; i++) {

  let numMoves = 0
  let x = startPos[1]
  let y = startPos[0]

  for (let j = i; j < s.length; j++) {

   if (s[j] === 'R') x++
   if (s[j] === 'L') x--
   if (s[j] === 'U') y--
   if (s[j] === 'D') y++

   if (x < 0) break;
   else if (x >= n) break;
   else if (y < 0) break;
   else if (y >= n) break;
   else numMoves++;
  }

  moves.push(numMoves)
 }

 return moves
};