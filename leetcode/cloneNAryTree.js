// https://leetcode.com/problems/clone-n-ary-tree/

var cloneTree = function(root) {
    
 if (root === null) return
 
 let clone = new Node(root.val)
 
 for (let child of root.children) {
     clone.children.push(cloneTree(child))
 }
 
 return clone
};