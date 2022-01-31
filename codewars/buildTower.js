function towerBuilder(nFloors) {
 let array = [];
 let space = ' ';
 let tower = '*';
 let spaceNum = nFloors - 1;
 let towerNum = 1;
 for (let i = 0; i < nFloors; i++) {
   let workingString = `${space.repeat(spaceNum)}${tower.repeat(towerNum)}${space.repeat(spaceNum)}`;
   array.push(workingString);
   spaceNum -= 1;
   towerNum += 2;
 }
 return array;
}

console.log(towerBuilder(5));