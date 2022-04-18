// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

var kthSmallest = function(root, k) {
    
 let values = [];
 
 function getValues(node) {
   
     if (node.left) getValues(node.left);
     values.push(node.val);
     if (node.right) getValues(node.right);
 }
 
 getValues(root);
 
 return values[k-1];
};