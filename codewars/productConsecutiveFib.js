function productFib(prod){
 let n = 0;
 let fibonacciStarter = [0,1]
 let resultArray = []

 const fibHelper = (fibonacciStarter, n, prod) => {
 console.log('n', n, 'fibonacciStarter', fibonacciStarter)

  if (fibonacciStarter[n] * fibonacciStarter[n+1] > prod) {
   resultArray = [fibonacciStarter[n], fibonacciStarter[n+1], false]
   return resultArray
  } else if (fibonacciStarter[n] * fibonacciStarter[n+1] === prod) {
   resultArray = [fibonacciStarter[n], fibonacciStarter[n+1], true]
   return resultArray
  } else if (fibonacciStarter[n] * fibonacciStarter[n+1] < prod) {
   fibonacciStarter.push(fibonacciStarter[n] + fibonacciStarter[n+1])
   n++
   fibHelper(fibonacciStarter, n, prod)
  }
 }

 fibHelper(fibonacciStarter, n, prod)
 return resultArray;
 }

console.log(productFib(6))