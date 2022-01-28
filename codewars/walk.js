function isValidWalk(walk) {
 if (walk.length != 10) return false;

 let directions = {};

 for (let i = 0; i < walk.length; i++) {
  let direction = walk[i];

  if (direction === 'n') {
   if (!directions['n']) {
    directions['n'] = 1;
   } else directions['n']++
  }

  if (direction === 's') {
   if (!directions['s']) {
    directions['s'] = 1;
   } else directions['s']++
  }

  if (direction === 'e') {
   if (!directions['e']) {
    directions['e'] = 1;
   } else directions['e']++
  }

  if (direction === 'w') {
   if (!directions['w']) {
    directions['w'] = 1;
   } else directions['w']++
  }

 }

if (directions['n'] !== directions['s']) return false;
if (directions['w'] !== directions['e']) return false;

return true;
}

console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))