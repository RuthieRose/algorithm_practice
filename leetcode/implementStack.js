var MyStack = function() {
 stack = [];
};

/** 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
 stack.unshift(x);
};

/**
* @return {number}
*/
MyStack.prototype.pop = function() {
let elem = stack.shift()
return elem;
};

/**
* @return {number}
*/
MyStack.prototype.top = function() {
 let elem = stack[0];
 return elem;
};

/**
* @return {boolean}
*/
MyStack.prototype.empty = function() {
 if (stack.length === 0) return true;
 else return false;
};

/** 
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/

const implementStack = () => {
 let myStack = new MyStack();
 myStack.push(1);
 myStack.push(2);

 let testTop = myStack.top(2);
 let testPop = myStack.pop(2);
 let testEmpty = myStack.empty();
 
 console.log(testTop === 2, "Expected to be true");
 console.log(testPop === 2, "Expected to be true");
 console.log(testEmpty === false, "Expected to be true" )

}

console.log(implementStack())