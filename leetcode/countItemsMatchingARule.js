// https://leetcode.com/problems/count-items-matching-a-rule/

var countMatches = function(items, ruleKey, ruleValue) {
    
 let index;
 let count = 0;
 
 if (ruleKey == "type") index = 0;
 if (ruleKey == "color") index = 1;
 if (ruleKey == "name") index = 2;
 
 items.forEach(item => {
     if (item[index] === ruleValue) count++
 })
 
 return count;
};