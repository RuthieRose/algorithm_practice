// https://leetcode.com/problems/search-in-a-binary-search-tree/

var searchBST = function(root, val) {
    
 if (root === null || root.val === val) return root
 
 return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val)

};