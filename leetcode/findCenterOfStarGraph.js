// https://leetcode.com/problems/find-center-of-star-graph/

var findCenter = function(edges) {
    
 let firstNode = edges[0];
 
 let slice = edges.slice(0, Math.min(edges.length, 5));
 
 if (slice.every(node => node.includes(firstNode[0]))) return firstNode[0];
 if (slice.every(node => node.includes(firstNode[1]))) return firstNode[1];
 
 
};