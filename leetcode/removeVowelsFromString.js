// https://leetcode.com/problems/remove-vowels-from-a-string/

var removeVowels = function(s) {

let sArr = s.split('')
    let newS = sArr.filter(letter => letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u')
    return newS.join('')

}