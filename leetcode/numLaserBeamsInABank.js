// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/

var numberOfBeams = function(bank) {
    
 if (bank.length === 1) return 0
 
 let initiatingRow = bank[0].split('').reduce((a,b) => +a + +b)
 console.log(initiatingRow, 'initiatingRow')
 let closingRow = 0
 
 let totalLasers = 0
 
 for (let i = 1; i < bank.length; i++) {
     
     let numLasers = +bank[i].split('').reduce((a,b) => +a + +b)
     console.log(numLasers, 'numLasers', typeof numLasers)
     if (numLasers !== 0) {    
         closingRow = numLasers
         totalLasers += (initiatingRow * closingRow)
         console.log(totalLasers, 'totalLasers')
         initiatingRow = closingRow

         closingRow = 0
     }
     
 }
 
 return totalLasers
};

console.log(numberOfBeams(['1', '0', '1',  '0']))