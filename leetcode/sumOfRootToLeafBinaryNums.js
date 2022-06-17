// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

var sumRootToLeaf = function(root) {
    
 let rootToLeaf = 0
 let currNum = 0
 
 let stack = []
 stack.push([root, 0])
 
 while (stack.length > 0) {
     let node = stack.pop()
     let root = node[0]
     currNum = node[1]
     
     if (root !== null) {
         currNum = (currNum << 1) | root.val 
         
         if (root.left === null && root.right === null) {
             rootToLeaf += currNum
         } else {
             stack.push([root.right, currNum])
             stack.push([root.left, currNum])
         }
     }
 }
 
 return rootToLeaf
 
};