

var findRelativeRanks = function(score) {
 

 // this is the array that we will return 
 let returnRanks = [];
 
 // create a deep copy to rank based on score
 let scoreRank = [...score];
 scoreRank = scoreRank.sort((a,b) => b - a)

 // create a ranking hash
 let rankings = {}
 for (let i = 0; i < scoreRank.length; i++) {
   if (i === 0) rankings[scoreRank[i]] = "Gold Medal";
   else if (i === 1) rankings[scoreRank[i]] = "Silver Medal";
   else if (i === 2) rankings[scoreRank[i]] = "Bronze Medal";
   
   else {
    rankings[scoreRank[i]] = (i+1).toString();
   }
 }
  
  for (let i = 0; i < score.length; i++) {
   returnRanks.push(rankings[score[i]]);
  }

   return returnRanks;
};