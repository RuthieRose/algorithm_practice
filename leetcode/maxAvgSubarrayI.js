var findMaxAverage = function(nums, k) {
    
 if (nums.length === 1) return nums[0];
 if (nums.length === k) return nums.reduce((a,b) => a+b)/k;
 

 let sum = (nums.slice(0, k)).reduce((a,b) => a +b);
 let maxAvg = sum/k;
 
 for (let i = 0; i < nums.length - k; i++) {
     sum -= nums[i];
     sum += nums[k+i]
     avg = sum/k;
     console.log(avg)
     maxAvg = Math.max(maxAvg, avg);
 }
 
 return maxAvg;
};


