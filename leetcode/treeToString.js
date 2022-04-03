// https://leetcode.com/problems/construct-string-from-binary-tree/

var tree2str = function(root) {
    
 if (!root) return '';
 
 if (!root.left && !root.right) return `${root.val}`;
 if (!root.left) return `${root.val}()(${tree2str(root.right)})`;
 if (!root.right) return `${root.val}(${tree2str(root.left)})`;
 if (root.left && root.right) return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`;
};