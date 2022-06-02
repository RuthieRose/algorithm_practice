// https://leetcode.com/problems/maximum-binary-tree/

var constructMaximumBinaryTree = function(nums) {
    
 function createTree(nums){
     
     if (nums.length === 0) return null;
     let maxIndex = nums.indexOf(Math.max(...nums)); 

     let node = new TreeNode(nums[maxIndex]); 
     node.left = createTree(nums.slice(0,maxIndex));
     node.right = createTree(nums.slice(maxIndex+1));
     return node;
 }
 
 return createTree(nums)

};