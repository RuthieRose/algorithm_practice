// https://leetcode.com/problems/furthest-building-you-can-reach/

var furthestBuilding = function(heights, bricks, ladders) {
    
 let diffs = []
 let priorityQueue = []
 let count = 0
 
 for (let i = 1; i < heights.length; i++) {
     let diff = heights[i] - heights[i-1]
     
     if (diff <= 0) diffs.push(0)
     else diffs.push(diff)
 }
 
 let diffsInOrder = diffs.filter(diff => diff > 0).sort((a,b) => b- a)
 
 let priorityNum = diffsInOrder.length + 1
   
 for (let i = 0; i < diffs.length; i++) {
     
     let index = diffsInOrder.indexOf(diffs[i])
     
     priorityQueue.push([diffs[i], index === -1 ? priorityNum : index + 1])
 }
 
 while (priorityQueue.length > 0 && (bricks > 0 || ladders > 0)) {
     
     let decision = priorityQueue.shift()
     console.log('decision', decision)
     
     if (decision[0] === 0) {
         count++
         console.log('count', count)
     }
     
     else if (decision[1] >= ladders && bricks >= decision[0]) {
         bricks-= decision[0]
         count++
         console.log(bricks, 'bricks', count, 'count')
     }
         
     else {
         ladders--
         count++
         console.log(ladders, 'ladders', 'count', count)
     }
     
     console.log('priorityQueue', priorityQueue)
 }
 
 return count

};

furthestBuilding([4,12,2,7,3,18,20,3,19], 10, 2)