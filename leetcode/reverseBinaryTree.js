/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
  function invertNode(node) {
       
   let nodeHolderLeft;
   let nodeHolderRight; 
   
   if (node) {
    if (node.left === null) nodeHolderLeft = null;
    else nodeHolderLeft = node.left;
   
    if (node.right === null) nodeHolderRight = null;
    else nodeHolderRight = node.right;
   
   node.left = nodeHolderRight;
   node.right = nodeHolderLeft; 
   }

    
   if (node && node.left) invertNode(node.left)
   if (node && node.right) invertNode(node.right)
}

invertNode(root)
return root
};