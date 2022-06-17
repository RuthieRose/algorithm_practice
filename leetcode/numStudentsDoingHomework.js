// https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/

var busyStudent = function(startTime, endTime, queryTime) {
    
 let numStudents = 0
 
 for (let i = 0; i < startTime.length; i++) {
     if (startTime[i] <= queryTime && queryTime <= endTime[i]) numStudents++
 }
 
 return numStudents
};