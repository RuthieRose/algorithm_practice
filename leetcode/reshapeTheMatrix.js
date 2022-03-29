// https://leetcode.com/problems/reshape-the-matrix/

var matrixReshape = function(mat, r, c) {
    
 if (mat[0].length * mat.length !== r*c) return mat;
 
 let flatMatrix = mat.flat();
 let newMatrix = [];
 
 for (let i = 0; i < r; i++) {
     let workingArray = [];
     for (let j = 0; j < c; j++) {
         let item = flatMatrix.shift();
         workingArray.push(item);
         if (workingArray.length == c) newMatrix.push(workingArray);          
     }
 }
 
 return newMatrix;
};