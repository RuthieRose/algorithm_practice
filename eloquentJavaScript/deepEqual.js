function deepEqual(a,b) {
 if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
 return true;
}

console.log(deepEqual(

 {
  name: 'lily', 
  hobbies: 
  [
   { 
     work: ['coding', 'reading']
   }, 
   {
     home: ['chickens', 'painting', 'running', 'dogs']
    }
   ]
   },  {
    name: 'lily', 
    hobbies: 
    [
     { 
       work: ['coding', 'reading']
     }, 
     {
       home: ['chickens', 'painting', 'running', 'dogs']
      }
     ]
     }
  
     ))

     /* 
 if (typeof val1 !== 'object' && typeof val2 !== 'object') {
  if (val1 !== val2) return false;
 }

  if (typeof val1 == 'object' && val1 != null && typeof val2 == 'object' && val2 != null) {
   let val1Keys = Object.keys(val1);
   let val2Keys = Object.keys(val2);
   console.log('val1Keys', val1Keys, 'val2Keys', val2Keys)
   
   if (val1Keys.length != val2Keys.length) return false;

   for (let i = 0; i < val1Keys.length; i++) {
     let current1 = val1Keys[i];
     let current2 = val2Keys[i];

     let val1Curr1 = val1[current1];
     let val2Curr2 = val2[current2];

     console.log('current1', current1, 'current2', current2)
     console.log('val1Curr1', val1Curr1, 'val2Curr2', val2Curr2)

     if (current1 != current2) return false;

     if (typeof val1Curr1 != 'object' && typeof val2Curr2 != 'object') {
      if (val1Curr1 != val2Curr2) return false;
      }
     console.log('test')
     if (typeof val1Curr1 == 'object' && typeof val2Curr2 == 'object' && val1Curr1 != null && val2Curr2 != null) {
       console.log('should be running again')
       return deepEqual(val1Curr1, val2Curr2)
      }
   }
  }
  return true;*/