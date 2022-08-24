// https://leetcode.com/problems/array-transformation/

var transformArray = function(arr) {
    
 let changedArr = [...arr]
 let same = false
 
 while (!same) {
     
     arr = [...changedArr]
     changedArr = changedArr.map((item, index) => {
         
         if (index === 0 || index === changedArr.length - 1) {
             return item
         }
         
         else if (item < arr[index - 1] && item < arr[index + 1]) {
             return item+1
         }
         
         else if (item > arr[index + 1] && item > arr[index - 1]) {
             return item-1
         }
         
         else return item
     })
     
     same = true
     
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] !== changedArr[i]) same = false
     }
 }
 
 return arr
};