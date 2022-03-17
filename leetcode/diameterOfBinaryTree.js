var diameterOfBinaryTree = function(root) {
    
 let diameter = 0;
  
  function longestPath(node) {
      
      if (node === null) return 0;
      let leftPath = longestPath(node.left);
      let rightPath = longestPath(node.right);
      diameter= Math.max(diameter, leftPath + rightPath);
      return Math.max(leftPath, rightPath) + 1;

  }
  
  longestPath(root);

  return diameter
  
};