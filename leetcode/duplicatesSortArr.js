let nums = [1,2,2]

var removeDuplicates = function(nums) {
 
if (nums.length === 0) {
 return 0;
}
nums = nums.sort((a,b) => a - b);

let tab1 = 0;

for (let tab2 = 1; tab2 < nums.length; tab2++) {
 if (nums[tab1] !== nums[tab2] ) {
  tab1++;
  nums[tab1] = nums[tab2]
 }
}

return tab1 + 1;
}



console.log(removeDuplicates(nums));