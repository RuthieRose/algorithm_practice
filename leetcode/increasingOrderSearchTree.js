// https://leetcode.com/problems/increasing-order-search-tree/

var increasingBST = function(root) {
    
 let nodes = [];
 
 function getNodes(node) {
     
     if (node.left) getNodes(node.left);
     if (node) nodes.push(new TreeNode(node.val, null, null));
     if (node.right) getNodes(node.right);
     
 }
 getNodes(root)
 
 for (let i = 0; i < nodes.length - 1; i++) {
     let node = nodes[i];
     let nextNode = nodes[i+1];
     node.right = nextNode;
 }
 
 return nodes[0]
};