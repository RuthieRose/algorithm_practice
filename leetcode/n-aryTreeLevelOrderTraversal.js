// https://leetcode.com/problems/n-ary-tree-level-order-traversal/

var levelOrder = function(root) {
    
 let levels = []
 let output = []
 
 function getValues(node, level) {
     
     if (node === null) return
     let value = node.val 
     levels.push({value, level})
     if (node.children.length) {
         node.children.forEach(child => getValues(child, level+1))
     }
 }
 
 getValues(root, 1)
 levels = levels.sort((a,b) => b.level - a.level)
 
 let workingLevel = 1
 let level = levels.pop()

 while (levels.length) {
     let workingSet = []
     while (level && level.level === workingLevel) {
         workingSet.push(level.value)
         level = levels.pop()
     }
     output.push(workingSet.reverse())
     workingLevel++
 }
 if (level !== undefined) output.push([level.value])
 return output
};