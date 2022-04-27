const assert = require('assert');

var confusingNumber = function(n) {
    
  let reverseN = n.toString().split('').reverse();
  if (reverseN.includes('2') || reverseN.includes('3') || reverseN.includes('4') || reverseN.includes('5') || reverseN.includes('7')) return false;
  for (let i = 0; i < reverseN.length; i++) {
    let num = reverseN[i];
    if (num === '6') {
        reverseN[i] = '9'
    } else if (num === '9') {
        reverseN[i] = '6'
    }
  }
  reverseN = reverseN.join('');
  reverseN = +reverseN;
  if (n === reverseN) return false;
  return true;
  
 };

describe('Confusing Number', function () {
 describe('result', function () {
  it('should return true when the number is valid and false if it is not', function () {
    assert.equal(confusingNumber(6),true);
    assert.equal(confusingNumber(11),false);
    assert.equal(confusingNumber(68),true);
  })
 })
})