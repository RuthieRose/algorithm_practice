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
 var widthOfBinaryTree = function(root) {
  
  // using array indeces as levels
  
 const minPos = [0];
 let maxWidth = 0;
  
 function DFS(node, level, pos) {
     
      if(!node) return;
      if(minPos[level] === undefined) minPos.push(pos);
      
      // calculates the difference between the last index and first position of that level
      const difference = pos - minPos[level];
      maxWidth = Math.max(maxWidth, difference+1);
      
      DFS(node.left, level+1, difference *2);
      DFS(node.right, level+1, difference *2+1);
 }
  
  DFS(root, 0, 0);
     
  return maxWidth;

};