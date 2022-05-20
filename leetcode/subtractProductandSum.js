// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

var subtractProductAndSum = function(n) {
    
 let nString = n.toString().split('');
 return nString.reduce((a,b) => +a * +b) - nString.reduce((a,b) => +a + +b)
};