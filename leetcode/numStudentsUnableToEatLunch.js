// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

var countStudents = function(students, sandwiches) {
    
 while (sandwiches.length && ((students.includes(0) && students.includes(1)) || (students[0] === sandwiches[0]))) {
     
     let student = students.shift()
     if (student === sandwiches[0]) sandwiches.shift()
     else students.push(student)
     
 }
 
 return students.length 
};