var removeElement = function(nums, val) {
    
    if (nums.includes(val)) {
     nums.forEach((item, index) => {
      if (item !== val) {
         nums.splice(index, 1)
         nums.unshift(item)
       }
      })
       
      let k = nums.indexOf(nums[nums.length - 1]);
      return k;

    } else return nums.length;

};


console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))
