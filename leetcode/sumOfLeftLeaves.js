var sumOfLeftLeaves = function(root) {
 let sum = 0;
 
 function getLeft(node, isLeft) {
     
     if (node.left) getLeft(node.left, true);
     if (node.right) getLeft(node.right, false);
     if (node.left === null && node.right === null && isLeft) {
         sum += node.val;
     }
 }
 
 getLeft(root, false);
 
 return sum;
};