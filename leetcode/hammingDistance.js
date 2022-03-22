var hammingDistance = function(x, y) {
 let positionsX = x.toString(2);
 let positionsY = y.toString(2);
 
 let maxLength = Math.max(positionsX.length, positionsY.length);
 let minLength = Math.min(positionsX.length, positionsY.length);
 
 if (positionsX.length < positionsY.length) {
     positionsX = positionsX.padStart(maxLength, "0");
 } else {
     positionsY = positionsY.padStart(maxLength, "0");
 }
 
 let count = 0; 
 
 for (let i = 0; i < maxLength; i++) {
     if (positionsX[i] !== positionsY[i]) count++;
 }
 
 return count;
};