var FreqStack = function() {
 this.stack = [];
 this.nums = {};
 this.len = 0;
};

/** 
* @param {number} val
* @return {void}
*/
FreqStack.prototype.push = function(val) {
 // this.stack.push(val);
 // if (this.nums[val]) {
 //     this.nums[val]++;
 // } else {
 //     this.nums[val] = 1;
 // }

 this.len++;
 console.log('this.len', this.len)
 if (this.nums[val]) {
     this.nums[val].count++;
     this.nums[val].indeces.push(this.len);
 } else {
     this.nums[val] = {count: 1, indeces: [this.len]};
 }
};

/**
* @return {number}
*/
FreqStack.prototype.pop = function() {

 let mostFrequent = 0;
 let highestIndex = -1;
 let returnNum;
    
 for (let key in this.nums) {
     mostFrequent = Math.max(this.nums[key].count, mostFrequent)
 }

 for (let key in this.nums) {
  if (this.nums[key].count === mostFrequent) {
      highestIndex = Math.max(this.nums[key].indeces[this.nums[key].indeces.length-1], highestIndex);

   }
 }
 
 for (let key in this.nums) {
  let array = this.nums[key].indeces;
  if (array[array.length-1] === highestIndex) {
   returnNum = key;
  }
 }
 console.log('returnNum', returnNum, 'highestIndex', highestIndex)

  this.nums[returnNum].count--;
  this.nums[returnNum].indeces.pop();

  for (let key in this.nums) {
   let indecesArray = this.nums[key].indeces;
   for (let i = 0; i < indecesArray.length; i++) {
    if (indecesArray[i] > highestIndex) {
     indecesArray[i]--
    }
   }
   console.log('indecesArray', indecesArray,' highestIndex', highestIndex)
  }

this.len--;
return returnNum;

     // let values = Object.values(this.nums);
     // values = values.sort((a,b) => b -a);
     // let mostFrequent = values[0];
     
     // for (let i = this.stack.length -1; i >= 0; i--) {
     //     let num = this.stack[i];
         
     //     if (this.nums[num] === mostFrequent) {
     //         this.nums[num]--;
     //         if (i === this.stack.length - 1) {
     //             return this.stack.pop();
     //         } else if (i !== 0) {
     //             this.stack = [...this.stack.slice(0,i), ...this.stack.slice(i+1)];
     //             return num;
     //         } else {
     //          return this.stack.pop();
     //         }
     //     }
     // }
};

/** 
* Your FreqStack object will be instantiated and called as such:
* var obj = new FreqStack()
* obj.push(val)
* var param_2 = obj.pop()
*/

let obj = new FreqStack();
console.log(obj);
obj.push(5);
console.log(obj.stack, obj.nums);
obj.push(7);
console.log(obj.stack, obj.nums);
obj.push(5);
console.log(obj.stack, obj.nums);
obj.push(7);
console.log(obj.stack, obj.nums);
obj.push(4);
console.log(obj.stack, obj.nums);
obj.push(5);
console.log(obj.stack, obj.nums);
console.log(obj.pop());
console.log(obj.stack, obj.nums);
console.log(obj.pop());
console.log(obj.stack, obj.nums);
console.log(obj.pop());
console.log(obj.stack, obj.nums);
console.log(obj.pop());
console.log(obj.stack, obj.nums);

