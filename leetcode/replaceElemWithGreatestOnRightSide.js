// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

var replaceElements = function(arr) {
    
 let returnArr = []
 for (let i = 0; i < arr.length-1; i++) {
     
     let greatest = Math.max(...arr.slice(i+1))
     returnArr.push(greatest)
 }
 returnArr.push(-1)
 
 return returnArr
};