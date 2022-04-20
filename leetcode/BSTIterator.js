// https://leetcode.com/problems/binary-search-tree-iterator/

var BSTIterator = function(root) {
 this.pointer = 0;
 this.values = [-1];
 
 const getValues = node => {
     if (node.left) getValues(node.left);
     this.values.push(node.val);
     if (node.right) getValues(node.right);
 }
 
 getValues(root)
};

/**
* @return {number}
*/
BSTIterator.prototype.next = function() {
 this.pointer++;
 return this.values[this.pointer];
};

/**
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function() {
 return this.pointer+1 < this.values.length;
};