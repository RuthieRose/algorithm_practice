
var compareVersion = function(version1, version2) {
    
 let returnValue = 0;  
  
 let v1Arr = version1.split('.').map(num => +num);
 let v2Arr = version2.split('.').map(num => +num);
  
 let v1Length = v1Arr.length;
 let v2Length = v2Arr.length;
  
 for (let i = 0; i < Math.min(v1Length, v2Length); i++) {
     if (v1Arr[i] > v2Arr[i]) {
         returnValue = 1; 
         break;
     } else if (v2Arr[i] > v1Arr[i]) {
         returnValue = -1;
         break;
     } 
 }

 if (returnValue !== 0) return returnValue;

 if (v1Length === v2Length) return returnValue;

 if (v1Length > v2Length) {
     for (let i = v2Length; i < v1Length; i++) {
         console.log(i, v1Arr[i])
         if (v1Arr[i] > 0) {      
             returnValue = 1;
             break;
         }
     }
 } else if (v2Length > v1Length) {
     for (let i = v1Length; i < v2Length; i++) {
         if (v2Arr[i] > 0) {
             console.log(returnValue, 'step 4')
             returnValue = -1;
             break;
         }
     }
 }

 return returnValue;
};

console.log(compareVersion('1.0', '1'))