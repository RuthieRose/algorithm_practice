// https://leetcode.com/problems/encode-and-decode-tinyurl/

var encode = function(longUrl) {
 this.hash = {}
 function createHash() {
     let randomStr = Math.random().toString(36).substring(2,10);
     hash[randomStr] = longUrl
     return randomStr;
 }
 return `https://tinyurl.com/${createHash()}`
};

/**
* Decodes a shortened URL to its original URL.
*
* @param {string} shortUrl
* @return {string}
*/
var decode = function(shortUrl) {
 let cut = shortUrl.slice(20)
 return this.hash[cut]
};

/**
* Your functions will be called as such:
* decode(encode(url));
*/