// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/

var findSecondMinimumValue = function(root) {
    
 let values = [];
 
 function getValues(node) {
     
     if (node.left) getValues(node.left);
     values.push(node.val);
     if (node.right) getValues(node.right);
 }
 
 getValues(root);
 let valuesSet = Array.from(new Set(values));
 valuesSet = valuesSet.sort((a,b) => a - b);
 if (valuesSet.length < 2) return -1;
 else return valuesSet[1];
};