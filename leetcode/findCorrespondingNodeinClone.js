// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/

var getTargetCopy = function(original, cloned, target) {
      
 let targetNode;
 function getNode(node) {
   if (node.val === target.val) {
       targetNode = node;
       return;
   };
   if (node.left) getNode(node.left);
   if (node.right) getNode(node.right);
 }
 
 getNode(cloned);
 return targetNode;

};