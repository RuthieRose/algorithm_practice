
var climbStairs = function(n) {
    
  let countingFunc = (stairsRemaining, savedResults) => {

   console.log('savedResults map before function', savedResults, 'stairsRemaining', stairsRemaining)
    if (stairsRemaining < 0) return 0;

    if (stairsRemaining === 0) {
     return 1;
    }

    if (savedResults[stairsRemaining]) {
     return savedResults[stairsRemaining]
    }

    savedResults[stairsRemaining] = countingFunc(stairsRemaining -1, savedResults) + countingFunc(stairsRemaining - 2, savedResults)
    
    console.log('savedResults map after function', savedResults, 'stairsRemaining', stairsRemaining)
    return savedResults[stairsRemaining];
  }

  return countingFunc(n, {})
};

console.log(climbStairs(4))