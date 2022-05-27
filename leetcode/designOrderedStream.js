// https://leetcode.com/problems/design-an-ordered-stream/

var OrderedStream = function(n) {
 this.stream = {}
 for (let i = 0; i < n; i++) {
     this.stream[i] = null
 }
 this.pointer = 0
 this.n = n
};

/** 
* @param {number} idKey 
* @param {string} value
* @return {string[]}
*/
OrderedStream.prototype.insert = function(idKey, value) {
 this.stream[idKey-1] = value
 let returnArray = []
 if (this.pointer === idKey - 1) {
     while (this.stream[this.pointer] !== null && this.pointer < this.n) {
         returnArray.push(this.stream[this.pointer])
         this.pointer++
         
     }
 }
 return returnArray
};