// https://leetcode.com/problems/self-dividing-numbers/

var selfDividingNumbers = function(left, right) {
    
 let selfDividingNums = []
 
 const selfDividingCheck = num => {
     
     let selfDividing = true
     let numString = num.toString()
     
     for (let i = 0; i < numString.length; i++) {
         
         let divisor = +numString[i]
         if (num % divisor !== 0) selfDividing = false
     }
     
     return selfDividing
     
 }
 
 for (let i = left; i <= right; i++) if (selfDividingCheck(i)) selfDividingNums.push(i)
 
 return selfDividingNums
 
};