// https://leetcode.com/problems/robot-return-to-origin/

var judgeCircle = function(moves) {
    
 let directions = {
     "U": 0,
     "D": 0,
     "R": 0,
     "L": 0,
 };
 
 for (let i = 0; i < moves.length; i++) {
     let move = moves[i];                                    
     directions[move]++;

 }
 
 return directions['R'] === directions['L'] && directions['U'] === directions['D']; 
};