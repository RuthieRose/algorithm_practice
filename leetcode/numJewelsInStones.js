// https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function(jewels, stones) {
 jewels = jewels.split('')
 let count = 0;
 for (let i = 0; i < stones.length; i++) {
     if (jewels.some(jewel => jewel === stones[i])) count++
 }
 return count;
};