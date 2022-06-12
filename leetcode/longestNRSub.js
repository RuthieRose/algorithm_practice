var lengthOfLongestSubstring = function (s) {

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

// the remix

var lengthOfLongestSubstring = function (s) {

   if (s.length === 0) return 0

   let workingSub = [s[0]]
   let longest = 1

   for (let i = 1; i < s.length; i++) {

      let char = s[i]

      if (workingSub.includes(char)) {
         while (workingSub.includes(char)) workingSub.shift()
      }

      workingSub.push(char)
      longest = Math.max(workingSub.length, longest)
   }

   return longest
};

// using set

var lengthOfLongestSubstring = function (s) {

   if (s.length === 0) return 0

   let frequency = new Set()
   let workingSub = []
   let longest = 1

   for (let i = 0; i < s.length; i++) {

      let char = s[i]

      if (frequency.has(char)) {
         while (frequency.has(char)) {
            let removeChar = workingSub.shift()
            frequency.delete(removeChar)
         }
      }

      workingSub.push(char)
      frequency.add(char)
      longest = Math.max(workingSub.length, longest)
   }

   return longest
};