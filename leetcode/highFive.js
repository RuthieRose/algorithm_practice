// https://leetcode.com/problems/high-five/

var highFive = function(items) {
    
 let students = {}
 let result = []
 
 items.forEach(item => {
     let student = item[0]
     let grade = item[1]
     
     if (students[student]) students[student].push(grade)
     else students[student] = [grade]
 })
 
 console.log(students)
 
 for (let student in students) {
     
     let grades = students[student]
     if (grades.length > 5) {
         grades = grades.sort((a,b) => b - a)
         grades = grades.slice(0,5)
     }
     let average = Math.floor((grades.reduce((a,b) => a + b)/grades.length))
     result.push([student, average])
 }
 
 return result
};