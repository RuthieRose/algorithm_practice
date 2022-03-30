// https://leetcode.com/problems/subtree-of-another-tree/

// the key to this one is **pre-order traversal** 

var isSubtree = function(root, subRoot) {

  // check for if nodes are same

  const isSame = (node1, node2) => {
   if (!node1 && !node2) return true;
   if (!node1 || !node2 || node1.val !== node2.val) return false;
   return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
  }

  // check for subtree

  const dfs = node => {
   if (!node) return false;
   if (node.val == subRoot.val && isSame(node, subRoot)) return true;
   return dfs(node.left) || dfs(node.right);
  }
  
  return dfs(root);


};