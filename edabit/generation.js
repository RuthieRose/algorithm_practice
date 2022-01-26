
const generation = (x,y) => {

 let gen;

 const generationMale = x => {
  switch(x) {
   case -3: 
   gen = 'great grandfather';
   break;

   case -2:
   gen = 'grandfather';
   break;

   case -1:
   gen = 'father';
   break;

   case 0: gen = 'me!';
   break;

   case 1: 
   gen = 'son';
   break;

   case 2: 
   gen = 'grandson';
   break;

   case 3: 
   gen = 'great grandson';
   break;

   default:
    gen = 'Please enter a valid combination' 
  }
 }

  const generationFemale = x => {
   switch(x) {
    case -3: 
    gen = 'great grandmother';
    break;
 
    case -2:
    gen = 'grandmother';
    break;
 
    case -1:
    gen = 'mother';
    break;
 
    case 0: gen = 'me!';
    break;
 
    case 1: 
    gen = 'daughter';
    break;
 
    case 2: 
    gen = 'granddaughter';
    break;
 
    case 3: 
    gen = 'great granddaughter';
    break;
 
    default:
     gen = 'Please enter a valid combination' 
   }
 }

  
 y === "m" ? generationMale(x) : generationFemale(x);

 return gen;

}

console.log(generation(2, "f") )

console.log(generation(-3, "m"))
console.log(generation(1, "f"))