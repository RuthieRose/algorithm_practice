// https://leetcode.com/problems/determine-if-string-halves-are-alike/

var halvesAreAlike = function(s) {
    
 s = s.toLowerCase()
 
 let a = s.slice(0, s.length/2).split('')
 let b = s.slice(s.length/2).split('')
 
 a = a.filter(letter => letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
 b = b.filter(letter => letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
 
 return a.length === b.length
};