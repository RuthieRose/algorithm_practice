// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/

var finalPrices = function(prices) {
    
 let discountedPrices = [];
 
 for (let i = 0; i < prices.length; i++) {
     let pointer = i+1;
     let foundADiscount = false;
     while (pointer < prices.length) {
         if (prices[pointer] <= prices[i]) {
             discountedPrices.push(prices[i] - prices[pointer]);
             foundADiscount =true;
             break;
         }
         pointer++;
     }
     if (!foundADiscount) discountedPrices.push(prices[i]);
 }
 
 return discountedPrices;
};