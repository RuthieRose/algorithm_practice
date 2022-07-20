// Missing Ranges https://leetcode.com/problems/missing-ranges/

var findMissingRanges = function(nums, lower, upper) {
    
 let missing = []
 if (nums.length === 0 && lower < upper) return [`${lower}->${upper}`]
 if (nums.length === 0 && lower === upper) return [`${lower}`]
 if (nums.length === 1 && nums[0] === lower && lower === upper) return []
 let num;
 
 while (nums.length > 0) {
     num = nums.shift()
     if (lower === num) {
         lower = num + 1
     }
     else if (lower < num) {
         if (lower === num -1 ) {
             missing.push(`${lower}`)
             lower = num + 1
         } else {
             missing.push(`${lower}->${num-1}`)
             lower = num + 1
         }
         
     }

 }

 if (lower < upper && nums.length === 0) {
     missing.push(`${lower}->${upper}`)
 }
 else if (lower === upper && nums.length === 0) {
     missing.push(`${lower}`)
 }

 console.log(missing)
 return missing
};