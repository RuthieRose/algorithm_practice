// https://leetcode.com/problems/flipping-an-image/

var flipAndInvertImage = function(image) {
    
 let returnImage = []
 
 for (let i = 0; i < image.length; i++) {
     let row = []
     for (let j = 0; j < image[0].length; j++) {
         if (image[i][j] === 1) row.unshift(0)
         if (image[i][j] === 0) row.unshift(1)
     }
     returnImage.push(row)
 }

 return returnImage
};