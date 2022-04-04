// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

var findTarget = function(root, k) {
 let values = [];
 
 const getValues = node => {
     
     if (node.left) getValues(node.left);
     values.push(node.val);
     if (node.right) getValues(node.right);
     
 }
 
 getValues(root);
 
 console.log(values)
 
 let pointer1 = 0;
 let pointer2 = values.length - 1;
 
 while (pointer1 < pointer2) {
     
     if (values[pointer1] + values[pointer2] === k) return true;
     else if (values[pointer1] + values[pointer2] < k) pointer1++;
     else if (values[pointer1] + values[pointer2] > k) pointer2--;
 }
 
 return false;
};

