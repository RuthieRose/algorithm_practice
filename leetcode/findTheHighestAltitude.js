// https://leetcode.com/problems/find-the-highest-altitude/

var largestAltitude = function(gain) {
    
 let altitudes = [0];
 
 for (let i = 0; i < gain.length; i++) {
     let curr = gain[i];
     
     altitudes.push(altitudes[altitudes.length - 1] + curr);
 }
 
 return Math.max(...altitudes);
};