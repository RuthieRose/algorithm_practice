// This works for the LeetCode challenge only because the limit is not very high. Will result in stack overflow for larger nums without dynamic programming.

var fib = function(n) {
    
 if (n === 0) return 0;
 else if (n === 1) return 1;
 
 else return fib(n-1) + fib(n-2);
};