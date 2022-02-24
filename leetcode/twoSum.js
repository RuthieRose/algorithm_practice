var TwoSum = function() {
    this.nums = [];
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.nums.push(number);

};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for (let i = 0; i < this.nums.length; i++) {
     for (let j = i+1; j < this.nums.length; j++) {
      if (this.nums[i] + this.nums[j] === value) {
       return true;
      }
     } 
     
    }
   return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
let obj = new TwoSum();
obj.add(4)
console.log(obj)