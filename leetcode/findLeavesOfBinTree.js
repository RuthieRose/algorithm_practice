// https://leetcode.com/problems/find-leaves-of-binary-tree

var findLeaves = function(root) {
    
 let solution = {}
 
 function getHeights(node) {
   
     if (node === null) return 0
     
     let leftHeight = getHeights(node.left)
     let rightHeight = getHeights(node.right)
     
     let currentHeight = Math.max(leftHeight, rightHeight) + 1

     if (Object.values(solution).length === currentHeight-1) {
         solution[currentHeight] = []
     }
     solution[currentHeight].push(node.val)
     
     return currentHeight
 }

getHeights(root)

return Object.values(solution)


};