// https://leetcode.com/problems/numbers-with-same-consecutive-differences/

var numsSameConsecDiff = function(n, k) {
    
 if (n === 1) return [0,1,2,3,4,5,6,7,8,9]

 let output = []
 
 function createNum(num, n, k, output) {
    if (n === 0 && !output.includes(num)) {
        output.push(num)
        return
    }
    if (n === 0 && output.includes(num)) return
    
    let digit = num % 10
    let validNums = []
    if (digit - k >= 0) validNums.push(num * 10 + (digit - k))
    if (digit + k <= 9) validNums.push(num * 10 + (digit + k))
     
    validNums.forEach(num => createNum(num, n-1, k, output))
 }
 
 for (let i = 1; i <= 9; i++) {
    createNum(i, n-1, k, output)
 }
 
 return output
};