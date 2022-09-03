// https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/

var garbageCollection = function(garbage, travel) {
    
 let total = 0
 let glass = []
 let paper = []
 let metal = []
 
 for (let i = 0; i < garbage.length; i++) {
     
     let trash = garbage[i]
     
     for (let j = 0; j < trash.length; j++) {
         if (trash[j] === 'G') glass.push(i)
         if (trash[j] === 'P') paper.push(i)
         if (trash[j] === 'M') metal.push(i)
     } 
 }

 
 total += glass.length
 total += metal.length 
 total += paper.length 
 
 let glassEnd = glass.pop()
 let metalEnd = metal.pop()
 let paperEnd = paper.pop()
 
 if (glassEnd !== undefined) {
     for (let i = 0; i < glassEnd; i++) {
         total += travel[i]
     }
 }
 
 if (metalEnd !== undefined) {
     for (let i = 0; i < metalEnd; i++) {
         total += travel[i]
     }  
 }
 
 if (paperEnd !== undefined) {
     for (let i = 0; i < paperEnd; i++) {
         total += travel[i]
     }
 }

 return total
};