// https://leetcode.com/problems/distribute-candies/

var distributeCandies = function(candyType) {
    
 let typesArray = Array.from(new Set(candyType));
 let types = typesArray.length;
 
 let numCandiesAllowed = candyType.length / 2;
 
 return Math.min(types, numCandiesAllowed);
 
 
};