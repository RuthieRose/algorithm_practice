function zero(func) {
 if (func) {
  return func(0)
 }
 else return 0
}
function one(func) {
 if (func) {
  return func(1)
 }
 else return 1
}
function two(func) {
 if (func) {
  return func(2)
 }
 else return 2
}
function three(func) {
 if (func) {
  return func(3)
 }
 else return 3
}

function four(func) {
 if (func) {
  return func(4)
 }
 else return 4
}

function five(func) {
 if (func) {
  return func(5)
 }
 else return 5
}
function six(func) {
 if (func) {
  return func(6)
 }
 else return 6
}
function seven(func) {
 if (func) {
  return func(7)
 }
 else return 7
}
function eight(func) {
 if (func) {
  return func(8)
 }
 else return 8
}
function nine(func) {
 if (func) {
  return func(9)
 }
 else return 9
}

function plus(a) {
 return function(b) {
  return a + b
 }
}
function minus(a) {
 return function(b) {
  return b - a
 }
}
function times(a) {
 return function(b) {
  return a * b
 }
}
function dividedBy(a) {
 return function(b) {
  return Math.floor(b / a)
 }
}

console.log(six(dividedBy(two())))