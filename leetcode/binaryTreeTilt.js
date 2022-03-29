// https://leetcode.com/problems/binary-tree-tilt/

var findTilt = function(root) {
    
 let tilt = 0;
 
 const getSum = node => {
     if (node === null) return 0;
     
     let leftSum = getSum(node.left);
     let rightSum = getSum(node.right);
     
     tilt += Math.abs(leftSum - rightSum);
     
     return node.val + leftSum + rightSum
 }
 
 getSum(root);
 return tilt;
};