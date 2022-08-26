// https://leetcode.com/problems/merge-similar-items

var mergeSimilarItems = function(items1, items2) {
    
 let weights = {}
 let totals = []
 
 for (let i = 0; i < items1.length; i++) {
     let value = items1[i][0]
     let weight = items1[i][1]
     
     if (weights[value]) weights[value] += weight
     else weights[value] = weight
 }
 for (let i = 0; i < items2.length; i++) {
     let value = items2[i][0]
     let weight = items2[i][1]
     
     if (weights[value]) weights[value] += weight
     else weights[value] = weight
 }
 
 for (let key in weights) {
     let value = key
     let weight = weights[key]
     totals.push([value, weight])
 }
 
 return totals
};