// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/

var minBitFlips = function(start, goal) {
    
 let flips = 0;
 
 start = start.toString(2).split(''); 
 goal = goal.toString(2).split('');
 
 if (start.length > goal.length) {
     while (start.length > goal.length) goal.unshift('0')
 } else if (goal.length > start.length) {
     while (goal.length > start.length) start.unshift('0')
 }
 
 while (start.length > 0) {
     let startBit = start.pop()
     let goalBit = goal.pop()
     
     if (startBit !== goalBit) flips++
 }
 
return flips

};