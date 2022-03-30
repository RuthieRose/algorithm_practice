// https://leetcode.com/problems/n-ary-tree-postorder-traversal/

var postorder = function(root) {
    
 let values = [];
 
 const getValues = (node) => {
     
     if (node === null) return;
     
     if (node.children) {
         let children = node.children;
         children.forEach(child => getValues(child));
     }
     
     values.push(node.val);
 }
 
 getValues(root);
 
 return values;
    
};