var lowestCommonAncestor = function(root, p, q) {
 let pVal = p.val;
 let qVal = q.val;
     
 let parentVal = root.val;
     
 if (pVal > parentVal && qVal > parentVal) return lowestCommonAncestor(root.right, p, q);
 else if (pVal < parentVal && qVal < parentVal) return lowestCommonAncestor(root.left, p, q);
     
 else return root;
};
