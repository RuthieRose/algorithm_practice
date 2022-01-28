
let flatten = arr => {
 return arr.reduce((a,b) => a.concat(b))
}

console.log(flatten([[1,2], [5,6],[3,4]]))