// https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/

var longestConsecutive = function(root) {
    
 let longestSequence = 0;
 
 getSequence = (node, numInSequence, prevVal) => {
     
     if (node.val === prevVal+1) numInSequence++;
     else numInSequence = 1;
     longestSequence = Math.max(longestSequence, numInSequence);
     
     prevVal = node.val;
     
     if (node.left) getSequence(node.left, numInSequence, prevVal);
     if (node.right) getSequence(node.right, numInSequence, prevVal);
     
 }
 
 getSequence(root, 0, null);
 return longestSequence;
};