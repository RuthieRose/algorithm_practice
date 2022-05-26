// https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/

var averageOfSubtree = function(root) {
 let numAverages = 0;
 
 function getCounts(node) {
     
    let sum = 0
    let count = 0
    
    function getNodeVals(node) {
        if (node.val) sum += node.val;
        count++
        
        if (node.left) getNodeVals(node.left)
        if (node.right) getNodeVals(node.right)
    }
    
    getNodeVals(node)
    return Math.floor(sum/count)
 }
 
 function getAverages(node) {
     if (node.val === getCounts(node)) {
         numAverages++
     }
     if (node.left) getAverages(node.left)
     if (node.right) getAverages(node.right)
 }
 
getAverages(root)
 
return numAverages
};