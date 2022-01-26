function tribonacci(signature, n){

 if (n === 0) {
  return []
 }

 if (n === 1) {
  return [signature[0]]
 }

 if (n === 2) {
  return [signature[0], signature[1]]
 }

 if (n === 3) {
  return [signature[0], signature[1], signature[2]]
 }

 let i = 0;

 while (signature.length < n) {
  signature.push(signature[i] + signature[i+1] + signature[i+2])
  i++
 }
 return signature;
 }

console.log(tribonacci([1,1,1],10))