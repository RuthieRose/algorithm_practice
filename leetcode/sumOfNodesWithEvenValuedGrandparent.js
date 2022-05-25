// https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/

var sumEvenGrandparent = function(root) {
 let sum = 0;
 function checkGrandparent(node) {
     if (node === null) return;
     
     if (node.val % 2 === 0) {
         if (node.left) {
             
             if (node.left.left) {
                 sum += node.left.left.val
     
             }
             if (node.left.right) {
                 sum += node.left.right.val
           
             }

         }
         
         if (node.right) {
         if (node.right.left) {
             sum += node.right.left.val
         
         }
         if (node.right.right) {
             sum += node.right.right.val
   
         }
     }
         
     }
    if (node.left) checkGrandparent(node.left)
    if (node.right) checkGrandparent(node.right)
     
 }
    
 checkGrandparent(root)
 return sum;
};