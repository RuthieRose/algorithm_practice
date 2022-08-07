// https://leetcode.com/problems/number-of-days-between-two-dates/

var daysBetweenDates = function(date1, date2) {
 date1 = new Date(date1).getTime()
 date2 = new Date(date2).getTime()
 
 let daysBetween = Math.abs(date1 - date2)
 
 daysBetween = Math.floor(daysBetween/(1000 * 60 * 60 * 24))
 
 return daysBetween
};