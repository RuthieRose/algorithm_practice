var lengthOfLongestSubstring = function(s) {

 let count = 0;
 let workingCount = 0;
 let subStr = '';
 
 if (s.length === 1) return 1;
 
 for (let i = 0; i < s.length; i++) {
    let currLetter = s[i];
    subStr += currLetter;
    console.log('first subStr', subStr)
    let idx = subStr.indexOf(currLetter);
    let lastIdx = subStr.lastIndexOf(currLetter);
    while (idx !== lastIdx) {
       subStr = subStr.slice(1);
       idx = subStr.indexOf(currLetter);
       lastIdx = subStr.lastIndexOf(currLetter);
    }
    console.log('after while loop', subStr)
    workingCount = subStr.length;
    count = Math.max(count, workingCount)
 }
 
 return count
 
};

console.log(lengthOfLongestSubstring("aabaab!bb"))