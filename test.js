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

 var specialArray = function(nums) {
    
  let unique = -1;
  
  for (let i = 0; i <= nums.length; i++) {
      let filter = nums.filter(num => {
          return num >= i
      })
      if (filter.length === i) {
          unique = i;
      }
  }
  
  return unique;
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

describe('Special Array with X Elements Greater Than or Equal to X', function () {
  describe('result', function () {
    it ('should return the unique number if there are x elements greater than or equal to x and -1 if there are not any', function () {
      assert.equal(specialArray([3,5]), 2);
      assert.equal(specialArray([0,0]), -1);
      assert.equal(specialArray([0,4,3,0,4]), 3);
    })
  })
})