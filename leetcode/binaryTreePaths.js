var binaryTreePaths = function(root) {
 let paths = [];
 let workingPath = '';
 
 function getPaths(node, workingPath) {
     
     workingPath+=  node.val.toString() + '->';
     
     if (node.left) {
         getPaths(node.left, workingPath)
     }
     
     if (node.right) {
         getPaths(node.right, workingPath)
     }
     
     if (node.left === null && node.right === null) {
         paths.push(workingPath);
         return;
     }
 }

getPaths(root, workingPath);
 
for (let i = 0; i < paths.length; i++) {
    paths[i] = paths[i].split('')
    paths[i].pop();
    paths[i].pop();
    paths[i] = paths[i].join('');
}

return paths;
};