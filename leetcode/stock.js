
var maxProfit = function(prices) {

 let buy = prices[0];
 let sell = prices[1];
 let difference = 0;
 let buyIndex = 0;
 let sellIndex = 1;

 for (let i = 1; i < prices.length; i++) {
   if (prices[i] < buy) {
    buy = prices[i];
    buyIndex = i;
    console.log(buy, 'buy', buyIndex, 'buyIndex')
   }

   if (prices[i] >= sell || 
    (prices[i] - buy > difference && i > buyIndex)) {
    sell = prices [i];
    sellIndex = i;
    console.log(sell, 'sell', sellIndex, 'sellIndex')
   }

   if (sellIndex > buyIndex && sell - buy > difference) {
    difference = sell - buy
    console.log(difference)
   }
  
 }

 return difference;

};
console.log(maxProfit([3,3,5,0,0,3,1,4]))


// for (let i = 0; i < prices.length; i++) {
//  let buy = prices[i];

//  for (let j = i+1; j < prices.length; j++) {

//     let sell = prices[j];
//     console.log('buy', buy, 'sell', sell)

//     if (sell - buy > difference) {
//      difference = sell - buy
//     }
//    }
//   }
// return difference