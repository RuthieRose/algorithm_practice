function findOutlier(integers){
 
 let odd = 0;
 let even = 0;

 let oddOutlier;
 let evenOutlier;
 
  for (let i = 0; i < integers.length; i++) {
   if (Math.abs(integers[i]) % 2 === 0) {
    even++
    evenOutlier = integers[i]
   } else if (Math.abs(integers[i]) % 2 === 1) {
    odd++
    oddOutlier = integers[i]
   }
  }

  if (odd > even) {
   return evenOutlier
  } else {
   return oddOutlier
  }


}

console.log(findOutlier([-150168166,-154243331,-143537502,4450854,-44211152,94715468,-4409774,94534826,-97698640,-55036226,23777072,108794420,72441458,-1981854,-119574612,25453800,113667040,-147202180,87989016,64376066,-143697886,29738268,-136760890,137695134,-71165222,56251848,98640088,112480538,-182310772,-3203262,-95050804,-163280772,-14585304,179593674,-19412806]))