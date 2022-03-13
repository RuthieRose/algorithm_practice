var generatePossibleNextMoves = function(currentState) {

 let moves = [];
 
 for (let i = 0; i < currentState.length - 1; i++) {
     let workingString = currentState.split('');
     if (currentState[i] === "+" && currentState[i+1] === "+") {
         workingString[i] = "-"
         workingString[i+1] = "-"
         workingString = workingString.join('')
         console.log(workingString)
         moves.push(workingString)
     }
 }
 return moves;
};