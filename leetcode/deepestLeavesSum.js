// https://leetcode.com/problems/deepest-leaves-sum/

var deepestLeavesSum = function(root) {
    
 let deepestLevel = 0;
 let sums = 0;
 
 function getLevel(node, level) {
   if (node.val) level++;
   deepestLevel = Math.max(level, deepestLevel);
   if (node.left) getLevel(node.left, level);
   if (node.right) getLevel(node.right, level);
 }
 getLevel(root, 0)
 
 function getSums(node, level) {
     if (node.val) level++
     if (level === deepestLevel) sums+= node.val;
     else {
         if (node.left) getSums(node.left, level);
         if (node.right) getSums(node.right, level);
     }
 }
 
 getSums(root, 0)
 
 return sums;
};