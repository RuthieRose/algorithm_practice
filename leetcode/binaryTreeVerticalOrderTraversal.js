// https://leetcode.com/problems/binary-tree-vertical-order-traversal/

var verticalOrder = function(root) {
    
 if (root === null) return []
 
 let columns = {}
 
 let queue = [[root, 100]]
 
 while (queue.length) {
     let set = queue.shift()
     let value = null
     let node = set[0]
     if (node) value = node.val
     let col = set[1]
     
     if (node.left) {
         queue.push([node.left, col-1])
     }
     if (node.right) {
         queue.push([node.right, col+1])
     }
     
     if (value !== null) {
         if (columns[col]) {
             columns[col].push(value)
         } 
         else columns[col] = [value]
     }
      
 }
 
 let answer = Object.values(columns)
 
 return answer
 
};