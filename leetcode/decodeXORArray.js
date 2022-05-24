// https://leetcode.com/problems/decode-xored-array/

var decode = function(encoded, first) {
 let decoded = [first]
 for (let i = 0; i < encoded.length; i++) {
     decoded.push(encoded[i] ^ decoded[i])
 }
 return decoded;
};