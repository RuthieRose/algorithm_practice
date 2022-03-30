-- https://leetcode.com/problems/combine-two-tables/

SELECT firstName, lastName, city, state
FROM Person
LEFT JOIN address
ON Person.personId = Address.personId;