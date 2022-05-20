// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

var minimumSum = function(num) {
    
 let numString = num.toString().split('');
 numString = numString.sort((a,b) => a - b)
 return +`${numString[0]}${numString[2]}` + +`${numString[1]}${numString[3]}`

};