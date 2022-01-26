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
 * @return {number}
 */
 var maxDepth = function(root) {
    let maxDepth = 0;

    let breadth = (node, level) => {
     if (node === null) return 
     
     if (level > maxDepth) maxDepth = level
     breadth(node.left, level + 1)
     breadth(node.right, level + 1)
    }

    breadth(root, 1)
    return maxDepth
 };