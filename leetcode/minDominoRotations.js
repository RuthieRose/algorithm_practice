// https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/

var minDominoRotations = function(tops, bottoms) {
    
 if ((Array.from(new Set(tops))).length === 1 || (Array.from(new Set(tops))).length === 1) return 0;
 
 const getRotations = num => {
     
     let rotationsA = 0, rotationsB = 0;
     
     for (let i = 0; i < tops.length; i++) {
         
         if (tops[i] !== num && bottoms[i] !== num) return -1;
         else if (tops[i] !== num) rotationsA++;
         else if (bottoms[i] !== num) rotationsB++;
         
     }
     return Math.min(rotationsA, rotationsB)
 }
 

 let rotations = getRotations(tops[0]);
 if (rotations != -1 || tops[0] === bottoms[0]) return rotations;
 else return getRotations(bottoms[0]);

 
};