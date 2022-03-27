var getMinimumDifference = function(root) {
    
 let values = [];
 let minValue = 10000;
 
 const getValues = node => {
     if (node.left) getValues(node.left);
     values.push(node.val);
     if (node.right) getValues(node.right);
 }
 
 getValues(root);
 
 for (let i = 0; i < values.length-1; i++) {
     minValue = Math.min(minValue, values[i+1] - values[i]);
 }
 
 return minValue;
};