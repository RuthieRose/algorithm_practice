// https://leetcode.com/problems/design-hashset/

var MyHashSet = function() {
 this.hash = [];
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function(key) {
 if (!this.hash.includes(key)) this.hash.push(key)
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function(key) {
 if (this.hash.includes(key)) {
     let idx = this.hash.indexOf(key);
     this.hash = [...this.hash.slice(0,idx), ...this.hash.slice(idx+1)]
 }
};

/** 
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function(key) {
 return this.hash.includes(key);
};