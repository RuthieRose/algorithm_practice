// https://leetcode.com/problems/find-anagram-mappings/

var anagramMappings = function(nums1, nums2) {
    
 let mapping = []
 for (let i = 0; i < nums1.length; i++) {
     mapping.push(nums2.indexOf(nums1[i]))
 }
 return mapping
};