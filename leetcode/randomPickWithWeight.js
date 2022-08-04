// https://leetcode.com/problems/random-pick-with-weight/

var Solution = function(w) {
    
 this.prefixSums = []
 this.prefixSum = 0
 
 for (let i = 0; i < w.length; i++) {
     this.prefixSum += w[i]
     this.prefixSums[i] = this.prefixSum
     console.log(this.prefixSum, 'prefixSum', this.prefixSums, 'prefixSums')
 }
 this.totalSum = this.prefixSum

};

/**
* @return {number}
*/
Solution.prototype.pickIndex = function() {
 this.target = this.totalSum * Math.random()
 let i = 0
 
 for (; i < this.prefixSums.length; i++) {
     if (this.target < this.prefixSums[i]) {
         console.log(i, 'i')
         return i
     }
 }
};