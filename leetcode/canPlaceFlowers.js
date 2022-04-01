// https://leetcode.com/problems/can-place-flowers/

var canPlaceFlowers = function(flowerbed, n) {
    
 if (n === 0) return true;
 if (n > (flowerbed.length/2 + 1)) return false;
 
 let counter = n;
 
 let previous = flowerbed[0];
 
 for (let i = 0; i < flowerbed.length; i++) {
     let current = flowerbed[i];
     let next;
     if (i+1 === flowerbed.length) next = 0;
     else next = flowerbed[i+1];
     if (previous === 0 && current === 0 && next === 0) {
         flowerbed[i] = 1;
         counter--;
     }
     if (counter === 0) return true;
     previous = flowerbed[i];
 }
 
 return false;
}