var rangeSumBST = function(root, low, high) {
    
 let queue = [];
 let values = [];
 let sum = 0;
 
 queue.push(root);
 
 while (queue.length >0) {
     node = queue.shift();
     
     if (node.left) queue.push(node.left);
     if (node.right) queue.push(node.right);
     values.push(node.val);
 }
 
 values = values.sort((a,b) => a - b)
 
 let startingIndex = values.indexOf(low);
 
 for (let i = startingIndex; i < values.length; i++) {
     if (values[i] <= high) sum += values[i]
 }
 
 return sum;
 
};