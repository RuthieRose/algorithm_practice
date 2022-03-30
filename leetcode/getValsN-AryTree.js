// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

var preorder = function(root) {
    
 let values = [];
 
 const getValues = (node) => {
     
     if (node === null) return;
     values.push(node.val);
     
     if (node.children) {
         let children = node.children;
         children.forEach(child => getValues(child));
     }
 }
 
 getValues(root);
 
 return values;
};