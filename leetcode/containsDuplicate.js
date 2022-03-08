var containsDuplicate = function(nums) {
 let set = Array.from(new Set(nums))
 if (set.length === nums.length) return false;
 else return true;
};