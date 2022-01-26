function bestMatch(ALAHLYGoals, zamalekGoals) {
 let matchDiff = []
 let highestMatches = []
 
 for (let i = 0; i < ALAHLYGoals.length; i++) {
  matchDiff.push(ALAHLYGoals[i] - zamalekGoals[i])
 }
 
 matchDiff = matchDiff.sort((a,b) => a - b)
 
 if (matchDiff[0] === matchDiff[1]) {
  for (let i = 0; i < ALAHLYGoals.length; i++) {
  if (ALAHLYGoals[i] - zamalekGoals[i] === matchDiff[0]) {
   highestMatches.push(zamalekGoals[i])
  }
 }
 
  highestMatches=highestMatches.sort((a,b) => b - a)
  
  for (let i = 0;  i < ALAHLYGoals.length; i++) {
   if (zamalekGoals[i] === highestMatches[0] && ALAHLYGoals[i] - zamalekGoals[i] === matchDiff[0]) {
    return i
   }
  } 
 } 
 for (let i = 0;  i < ALAHLYGoals.length; i++) {
  if (zamalekGoals[i] === highestMatches[0] && ALAHLYGoals[i] - zamalekGoals[i] === matchDiff[0]) {
   return i
  }
 } 
}

console.log(bestMatch([11,7,9,17,15,11,14,18,9,3,11,9,11,4,12,8,16,8,8],[5,1,5,10,10,8,4,9,8,1,3,7,5,3,3,0,7,3,5]))