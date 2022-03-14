var MovingAverage = function(size) {
 this.array = [];
 this.size = size;
};

/** 
* @param {number} val
* @return {number}
*/
MovingAverage.prototype.next = function(val) {
 this.array.push(val);
 if (this.array.length > this.size) {
     this.array.shift();
 }
 return (this.array.reduce((a,b) => a + b))/this.array.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */