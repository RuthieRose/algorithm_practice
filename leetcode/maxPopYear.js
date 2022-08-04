// https://leetcode.com/problems/maximum-population-year/

var maximumPopulation = function(logs) {
    
 let years = {}
 
 while (logs.length) {
     
     let log = logs.pop()
     for (let i = log[0]; i < log[1]; i++) {
         if (years[i]) years[i]++
         else years[i] = 1
     }
     
 }
 
 let maxPop = Math.max(...Object.values(years))
 
 for (let year in years) {
     if (years[year] === maxPop) {
         return year
         break
     }
 }
};