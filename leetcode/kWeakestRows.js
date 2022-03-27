var kWeakestRows = function(mat, k) {
    
 let indeces = [];
 
 // check to see if the number to the left is a 1. If it is, add to the indeces array 
 for (let i = 0; i < mat[0].length; i++) {
     for (let j = 0; j < mat.length; j++) {
         if (mat[j][i] == 0) {
             if (i == 0 || mat[j][i-1] == 1) {
                 indeces.push(j);
                 if (indeces.length == k) return indeces;
             }
         }
     }
 }
 // edge case: all the numbers in the row are 1s. In that case we add the remaining indeces to get to k in in order
 if (indeces.length < k) {
     for (let i = 0; i < mat.length; i++) {
         if (mat[i].every(item => item == 1)) {
             indeces.push(i);
             if (indeces.length === k) {
                 return indeces;
             }
         }
     }
 }
};