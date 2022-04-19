// https://leetcode.com/problems/recover-binary-search-tree/

var recoverTree = function(root) {
    
 let values = [];

 const getValues = node => {
     
     if (node === null) return;
     getValues(node.left);
     values.push(node.val);
     getValues(node.right);
 }
 
 getValues(root);
 
 const findSwapped = values => {
     let length = values.length;
     let a = -1, b = -1;
     let swappedFirst = false;
     
     for (let i = 0; i < values.length-1; i++) {
         if (values[i+1] < values[i]) {
             b = values[i+1];
             if (!swappedFirst) {
                 a = values[i];
                 swappedFirst = true;
             } else {
                 break;
             }
         }
     }
     return [a,b]
 }
 
 let swapped = findSwapped(values);
 
 const recover = (node, count, a, b) => {
     if (node !== null) {
         if (node.val === a || node.val === b) {
             node.val = node.val === a ? b : a;
             if (count-- === 0) return;
         }
         recover(node.left, count, a, b);
         recover(node.right, count, a, b);
     }
 }
 
 recover(root, 2, swapped[0], swapped[1]);
};