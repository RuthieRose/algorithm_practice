// https://leetcode.com/problems/complement-of-base-10-integer

var bitwiseComplement = function(n) {
    
 let binaryNum = n.toString(2)
 binaryNum = binaryNum.split('').map(digit => digit === '1' ? '0' : '1')
 return parseInt(binaryNum.join(''), 2)
};