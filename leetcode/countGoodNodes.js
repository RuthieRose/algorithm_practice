// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

var goodNodes = function(root) {
    
 let count= 0
 
 function getValues(node, max) {
  
     let value = node.val
     if (value >= max) {
         count++
         max = value
     }
     if (node.left) getValues(node.left, max)
     if (node.right) getValues(node.right, max)
 }
 getValues(root, -Number.MAX_VALUE)
 return count
};