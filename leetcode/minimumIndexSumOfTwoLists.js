// https://leetcode.com/problems/minimum-index-sum-of-two-lists/

var findRestaurant = function(list1, list2) {
    
 let both = [];
 
 list1.forEach(restaurant => {
     let filtered = list2.filter(item => item === restaurant);
     if (filtered.length > 0) both.push(filtered[0])
 })
 
 if (both.length === 1) return both;
 
 let indeces = {}
 
 both.forEach(restaurant => {
     indeces[restaurant] = list1.indexOf(restaurant) + list2.indexOf(restaurant);
 })
 
 let scores = Object.values(indeces)
 let minIndexSum = Math.min(...scores);
 let lowestIndexRestaurants = [];
 
 for (let key in indeces) {
     if (indeces[key] === minIndexSum) lowestIndexRestaurants.push(key)
 }
 
 return lowestIndexRestaurants;
};