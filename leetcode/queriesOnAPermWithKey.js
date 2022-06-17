// https://leetcode.com/problems/queries-on-a-permutation-with-key/

var processQueries = function(queries, m) {
    
 let array = []
 
 for (let i = 1; i <= m; i++) {
     array.push(i)
 }
 
 let result = []
 
 for (let i = 0; i < queries.length; i++) {
     
     let query = queries[i]
     let position = array.indexOf(query)
     result.push(position)
     
     array = [query, ...array.slice(0,position), ...array.slice(position+1)]
 }
              
 return result
};