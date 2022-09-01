// https://leetcode.com/problems/relative-sort-array/

var relativeSortArray = function(arr1, arr2) {
    
 let remaining = arr1.filter(item => !arr2.includes(item))
 remaining.sort((a,b) => a - b)
 
 let sorted = []
 let pointer = 0
 
 while (arr1.length > remaining.length) {
     while(arr1.includes(arr2[pointer])) {
         arr1.splice(arr1.indexOf(arr2[pointer]), 1)
         sorted.push(arr2[pointer])
     }
     pointer++
 }

 return sorted.concat(remaining)
};