var summaryRanges = function(nums) {
 if (nums.length === 0) return [];
 if (nums.length === 1) return [nums[0].toString()];
 if (nums.length === 2 && nums[0] === nums[1]) return [nums[0].toString()];
 
 let ranges = [];
 let workingRange = [];
 
 while (nums.length > 0) {
    let currNum = nums.shift();
     
    if ((workingRange.length === 0) || ((workingRange[workingRange.length - 1]) + 1 === currNum)) {
        workingRange.push(currNum)
    } else {
        if (workingRange.length === 1) {
            ranges.push(workingRange[0].toString());
            workingRange = [currNum];
        } else {
            ranges.push(`${workingRange[0]}->${workingRange[workingRange.length-1]}`);
            workingRange = [currNum];
        }
    }
 }
 if (workingRange.length === 0) return ranges;
 else if (workingRange.length === 1) {
     ranges.push(workingRange[0].toString());
     return ranges;
 } else {
     ranges.push(`${workingRange[0]}->${workingRange[workingRange.length-1]}`);
     return ranges;
 }

};