// https://leetcode.com/problems/average-of-levels-in-binary-tree/

var averageOfLevels = function(root) {
 let count = [];
 let sums = [];
 
 function getAverage(node, level, sums, count) {
     
     if (!node) return;
     
     if (!sums[level]) sums[level] = 0;
     sums[level] += node.val;
     
     if (!count[level]) count[level] = 0;
     count[level]++;
     
     getAverage(node.left, level+1, sums, count);
     getAverage(node.right, level+1, sums, count);
     
 }
 
 getAverage(root, 0, sums, count);
 
 let averages = [];
 
 for (let i = 0; i < sums.length; i++) {
     averages.push(sums[i]/count[i])
 }
 
 return averages;
 
};