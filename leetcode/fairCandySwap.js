// https://leetcode.com/problems/fair-candy-swap/

var fairCandySwap = function(aliceSizes, bobSizes) {

    
 let aliceTotal = aliceSizes.reduce((a,b) => a + b)
 let bobTotal = bobSizes.reduce((a,b) => a + b)
 
 let bobSet = new Set(bobSizes)
 
 let swap = []
 

 for (let i = 0; i < aliceSizes.length; i++) {
     let candy = aliceSizes[i]
     let missing = ((bobTotal -aliceTotal)/2 + candy)
     if (bobSet.has(missing)) {
         swap = [candy, missing]
     }
 }

 return swap
 
};