-- https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/

SELECT euni.unique_id, e.name  
FROM Employees as e
LEFT JOIN EmployeeUNI as euni ON e.id = euni.id; 