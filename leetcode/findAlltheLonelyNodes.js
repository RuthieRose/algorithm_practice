// https://leetcode.com/problems/find-all-the-lonely-nodes/

var getLonelyNodes = function(root) {
 let values = []
 
 function getValues(node) {
     
     if (node === null) return
     
     if (node.left && node.right) {
         getValues(node.left)
         getValues(node.right)
     }
     else if (node.left && node.right === null) {
         values.push(node.left.val)
         getValues(node.left)
     }
     else if (node.right && node.left === null) {
         values.push(node.right.val)
         getValues(node.right)
     }
     
 }
 
 getValues(root)
 return values
 
};