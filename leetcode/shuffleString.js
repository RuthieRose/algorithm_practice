/**
 You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string. Return the shuffled string.
 */

var restoreString = function(s, indices) {
 let key = new Map()
 
 for (let i = 0; i < s.length; i++) {
     key.set(indices[i], s[i]);
 }
 
 let newS = '';
 
 for (let i = 0; i < s.length; i++) {
     newS += key.get(i)
 }
 
 return newS;
};