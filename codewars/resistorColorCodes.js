// 0: black, 1: brown, 2: red, 3: orange, 4: yellow, 5: green, 6: blue, 7: violet, 8: gray, 9: white

// 3 bands

// first two bands are digits of ohm value

// third is power of ten to multiply them by 

// 47 ohms would be 47 * 10 ^ 0 would translate to yellow, violet, black

// M at the end means / 1,000,000 or 10 * 10^5

function encodeResistorColors(ohmsString) {
  let bands = {
   0: 'black', 
   1: 'brown', 
   2: 'red', 
   3: 'orange', 
   4: 'yellow', 
   5: 'green', 
   6: 'blue', 
   7: 'violet', 
   8: 'gray', 
   9: 'white'
  }

  let [num, ohms] = ohmsString.split(' ')
  if (num[num.length - 1] === 'k') {
   num = num.split('')
   num.pop()
   num = num.join('')
   num = +num
   num *= 1000
   num = num.toString().split('')
  } else if (num[num.length - 1] === 'M') {
   num = num.split('')
   num.pop()
   num = num.join('')
   num = +num
   num *= 1000000
   num = num.toString().split('')
  } 

  let color1 = num[0]
  let color2 = num[1]
  let color3 = num.length - 2
  let color4 = 'gold'

  let colorBandArray = [bands[color1], bands[color2], bands[color3], color4]

  return colorBandArray.join(' ')
}

console.log(encodeResistorColors("10 ohms"))
console.log(encodeResistorColors("1k ohms"))
console.log(encodeResistorColors("2M ohms"))
console.log(encodeResistorColors("990M ohms"))