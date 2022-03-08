var closestValue = function(root, target) {
 let closest = Infinity;
 let nodeVal;
 
 function getVal(node) {
     if (Math.abs(node.val - target) < closest) {
         closest = Math.abs(node.val - target);
         nodeVal = node.val;
     }
     
     if (node.left) getVal(node.left);
     if (node.right) getVal(node.right);
 }
 
 getVal(root);
 return nodeVal;
};