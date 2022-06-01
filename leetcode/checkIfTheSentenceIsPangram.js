// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

var checkIfPangram = function(sentence) {
    
 sentence = Array.from(new Set(sentence.split('')))
 if (sentence.length === 26) return true
 else return false
};