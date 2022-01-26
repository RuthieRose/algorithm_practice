var addBinary = function(a, b) {
    let carry = 0;
    // create an array that is the largest of a and b and fill with zero
    let aLen = a.length;
    let bLen = b.length;
    let max = Math.max(aLen, bLen)
    let result = Array(max).fill(0);

    let i = 0;

    while (i < max) {
     let sum = (aLen - 1 - i < 0 ? 0 : a[aLen - 1 - i] * 1) + (bLen - 1-i < 0 ? 0 : b[bLen - 1- i] * 1) + carry
    
    
    result[max - 1 - i] = sum % 2
    carry = Math.floor(sum / 2)

    i++
    console.log( result)
    }

    if (carry > 0) {
     result.unshift(1)
    }

    return result.join('')
};

console.log(addBinary('1101','11100'))