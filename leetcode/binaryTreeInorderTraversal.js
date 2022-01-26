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
 * @return {number[]}
 */

// Morris Traversal

 function findPrev(root) {
  let pointer1 = root.left
  while (pointer1.right && pointer1.right !== root) {
   pointer1 = pointer1.right
  }
  return pointer1
 }

 var inorderTraversal = function(root) {
    let pointer1 = root;
    let solution = [];

    while (pointer1) {
     if (!pointer1.left) {
      solution.push(pointer1.val)
      pointer1 = pointer1.right
     } else {
      let prev = findPrev(pointer1)
      if (prev.right == pointer1) {
       prev.right = null
       solution.push(pointer1.val)
       pointer1 = pointer1.right
      } else {
       prev.right = pointer1
       pointer1 = pointer1.left
      }
     }
    }
    return solution;
   }



 


 