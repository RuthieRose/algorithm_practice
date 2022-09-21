// https://leetcode.com/problems/binary-tree-pruning/

var pruneTree = function(root) {
    
 function hasOnes(node) {
     if (node === null) return false
     
     let leftOnes = hasOnes(node.left)
     let rightOnes = hasOnes(node.right)
     
     if (!leftOnes) node.left = null
     if (!rightOnes) node.right = null
     
     return node.val === 1 || leftOnes || rightOnes
 }
 
 return hasOnes(root) ? root : null
};