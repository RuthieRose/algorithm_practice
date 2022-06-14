// https://leetcode.com/problems/destination-city/

var destCity = function(paths) {
   
 let cities = {
     departures: [],
     arrivals: []
 }
 
 paths.forEach(path => {
    cities.departures.push(path[0])
    cities.arrivals.push(path[1])
 })
 
 return cities.arrivals.filter(city => !cities.departures.includes(city))[0]
};