const whichIsLarger = (func1, func2) => 

 func1() > func2() ? "f" : func2() > func1() ? "g" : "neither"

console.log(whichIsLarger(() => 5, () => 10))

console.log(whichIsLarger(() => 25,  () => 25) )

console.log(whichIsLarger(() => 505050, () => 5050) )
