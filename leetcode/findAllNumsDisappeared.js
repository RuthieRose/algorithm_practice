var findDisappearedNumbers = function(nums) {
    endRange = nums.length;
    nums = (Array.from(new Set(nums))).sort((a,b) => a-b);
    let pointer = 0;
    let missingNums = [];

    for (let i = 1; i <= endRange; i++) {
     if (nums[pointer] === i) {
      pointer++
     } else {
      missingNums.push(i)
     }
    }

    return missingNums;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
console.log(findDisappearedNumbers([1,1]))