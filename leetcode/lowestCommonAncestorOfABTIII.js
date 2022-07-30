// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/

var lowestCommonAncestor = function(p, q) {
    
 let parent1vals = []
 let parent2vals = []
 let LCPval
 
 let node1 = p
 let node2 = q
 
 while (node1) {
     parent1vals.push(node1.val)
     node1 = node1.parent
 }
 
 while (node2) {
     parent2vals.push(node2.val)
     node2 = node2.parent
 }
 
 for (let i = 0; i < parent1vals.length; i++) {
     
     let parent1 = parent1vals[i]
     let parent2 = parent2vals[i]
     
     if (parent1vals.includes(parent2)) {
         LCPval = parent2
         break
     }
     
     if (parent2vals.includes(parent1)) {
         LCPval = parent1
         break
     }
     
 }
 
 while (p) {
     if (p.val === LCPval) return p
     p = p.parent
 }
};