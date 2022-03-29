// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

var maxDepth = function(root) {
    
 let depth = 0;
 
 let getLevel = (node, level) => {
     if (node === null) return;
     
     if (level > depth) depth = level;
     if (node.children) {
         let children = node.children;
         children.forEach(child => {
             getLevel(child, level + 1);
         })
     }
 }
 
 getLevel(root, 1);
 return depth;
 
};