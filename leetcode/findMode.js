var findMode = function(root) {
    
 let values = {};
 
 let getValues = node => {
     
     let value = node.val;

     if (values[value] ){
         values[value]++;
     } else {
         values[value] = 1;
     }
     if (node.left) getValues(node.left);

     if (node.right) getValues(node.right);
 }
 getValues(root);
 
 let mode = ((Object.values(values)).sort((a,b) => b -a))[0];
 console.log(mode)
 let modeArray = [];
 for (let key in values) {
     if (values[key] === mode) {
         modeArray.push(key);
     }
 }
 

 return modeArray;
 
};