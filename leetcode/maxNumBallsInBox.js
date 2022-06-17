// https://leetcode.com/problems/maximum-number-of-balls-in-a-box/

var countBalls = function(lowLimit, highLimit) {
    
 let boxNums = {}
 
 for (let i = 1; i <= highLimit; i++) {
     boxNums[i] = 0
 }
 
 const getBoxNum = box => {
    return box.toString().split('').reduce((a,b) => +a + +b)
 }
 
 for (let i = lowLimit; i <= highLimit; i++) {
     boxNums[getBoxNum(i)]++
 }
 
 let highest = Math.max(...Object.values(boxNums))

 
 return highest
};