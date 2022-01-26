function shiftToRight(x, y) {
	 return Math.floor(x / (2 ** y))
}

console.log(shiftToRight(80,3))

console.log(shiftToRight(-24,2))

console.log(shiftToRight(-5,1))