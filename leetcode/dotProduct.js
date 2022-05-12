// https://leetcode.com/problems/dot-product-of-two-sparse-vectors/

var SparseVector = function(nums) {
 this.nums = nums; 
};

// Return the dotProduct of two sparse vectors
/**
* @param {SparseVector} vec
* @return {number}
*/
SparseVector.prototype.dotProduct = function(vec) {
  let vecNums = vec.nums;
  let products = []
  vecNums.forEach((num, index) => {
     if (num !== 0) products.push(num * this.nums[index])
  })
  return products.reduce((a,b) => {
      return a + b
  }, 0)
};