// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/

var minPartitions = function(n) {
 n = n.toString().split('')
 return Math.max(...n)
};