// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

var kthSmallest = function(matrix, k) {
 matrix = matrix.flat().sort((a,b) => a - b)
 return matrix[k-1]
};

// Definitely need to revisit this to do in the 'right' way instead of built-in methods, but it's good to know this approach works as a starting point. 