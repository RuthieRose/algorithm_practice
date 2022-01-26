
var MinStack = function() {
 this.first = null
 this.last = null
 this.size = 0
 this.min = []
};

var Node = function(val) {
 this.val = val
 this.next = null
}

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
 let newNode = new Node(val)
 if (!this.first) {
     this.first = newNode
     this.last = newNode
 } else {
     let temp = this.first 
     this.first = newNode 
     this.first.next = temp
 }
 this.min.unshift(val)
 this.size++ 
 return null 
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
 if (!this.first) return null
 if (this.first === this.last) {
     this.last = null
 }
 this.first = this.first.next 
 this.min.shift()
 this.size--
 return null
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
 if (!this.first) return null
 return this.first.val 
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
 if (this.size === 0) return null
 let temp = this.min.slice()
 return temp.sort((a,b) => (a -b))[0] 
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/