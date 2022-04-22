// https://leetcode.com/problems/design-hashmap/

MyHashMap.prototype.put = function(key, value) {
 let found = false;
 for (let set of this.hashMap) {
     if (set[0] === key) {
        set[1] = value; 
        found = true;
     }
 }
 if (found === false) this.hashMap.push([key, value]);

};

/** 
* @param {number} key
* @return {number}
*/
MyHashMap.prototype.get = function(key) {
 let found = false;
 for (let set of this.hashMap) {
     if (set[0] === key) {
         found = true;
         return set[1];
     }
 }
 if (found === false) return -1;

 
};

/** 
* @param {number} key
* @return {void}
*/
MyHashMap.prototype.remove = function(key) {
 let newMap = this.hashMap.filter(set => key !== set[0]);
 this.hashMap = newMap;
};