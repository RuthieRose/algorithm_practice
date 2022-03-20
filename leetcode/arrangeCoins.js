var arrangeCoins = function(n) {
    
 let rows = 0;
 let count = 1;
 
 while (n > 0) {
    n -= count;
    count++;
    rows++;
 }
 
 if (n === 0) return rows;
 else return rows-1;
};