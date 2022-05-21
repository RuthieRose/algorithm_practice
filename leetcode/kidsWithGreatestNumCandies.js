// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

var kidsWithCandies = function(candies, extraCandies) {
 let greatestNum = Math.max(...candies);
 let hasPotentialMostCandies = []
 for (let i = 0; i < candies.length; i++) {
     if (candies[i] + extraCandies >= greatestNum) hasPotentialMostCandies.push(true)
     else hasPotentialMostCandies.push(false)
 }
 return hasPotentialMostCandies;
};