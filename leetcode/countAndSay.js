// https://leetcode.com/problems/count-and-say/

var countAndSay = function(n) {
    
 let countArr = ['1', '11'];
 
 const getNextLine = i => {
     
     let line = countArr[i-1]
     console.log('line', countArr[0])
     
     let currNum = line[0];
     let currNumCount = 1;
     let workingString = '';

     for (let j = 1; j < line.length; j++) {

         num = line[j];

         if (j < line.length - 1) {

             if (currNum === num) currNumCount++;
             else {
                 workingString += currNumCount.toString();
                 workingString += currNum;
                 currNum = num;
                 currNumCount = 1;
             }
         }

         if (j === line.length - 1) {

              if (currNum === num) {
                  currNumCount++;
                  workingString += currNumCount.toString();
                  workingString += currNum;
                  countArr.push(workingString)
              } else {
                  workingString += currNumCount.toString();
                  workingString += currNum;
                  currNum = num;
                  currNumCount = 1;
                  workingString += currNumCount.toString();
                  workingString += currNum;
                  countArr.push(workingString)
              }
         }

     }

 }
 
 for (let i = 1; i < n; i++) {
     getNextLine(i);
     console.log('countArr', countArr)
 }
 
 return countArr[n-1]
};