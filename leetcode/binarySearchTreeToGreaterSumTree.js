// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/

var bstToGst = function(root) {
 let values = []
 
 function getValues(node) {
     if (node === null) return
     getValues(node.left)
     values.push(node.val)
     getValues(node.right)
 }
 
 getValues(root)
 
 function alterNodes(node) {
     if (node === null) return
     let index = values.indexOf(node.val)
     node.val = values.slice(index).reduce((a,b) => a + b)
     
     alterNodes(node.left)
     alterNodes(node.right)
 }
 
 alterNodes(root)
 return root;
};

var bstToGst = function(root) {
 let values = []
 
 function getValues(node) {
     if (node === null) return
     getValues(node.left)
     values.push(node.val)
     getValues(node.right)
 }
 
 getValues(root)
 let sum = values.reduce((a,b) => a + b)
 
 function alterNodes(node) {
     if (node === null) return

     alterNodes(node.left)
     node.val = sum
     sum -= values.shift()
     alterNodes(node.right)
 }
 
 alterNodes(root)
 return root;
};