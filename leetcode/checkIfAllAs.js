// https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/

var checkString = function(s) {
 let sArray = s.split('');
 if (!sArray.includes('a')) return true;
 if (!sArray.includes('b')) return true;
 
 if (sArray.lastIndexOf('a') > sArray.indexOf('b')) return false;
 return true;
};