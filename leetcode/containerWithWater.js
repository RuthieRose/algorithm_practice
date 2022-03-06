var maxArea = function(height) {
    // integer array heigh of length n
    // there are n vertical lines drawn so that the endpoints of the ith line are (i, 0) and (i, height[i])

    // get the two lines that contain the most water and return the maximum amount of water
    let maxWater = 0;
    
    let left = 0;
    let right = height.length - 1;

    while (left < right) {

       let containerHeight = Math.min(height[left], height[right])

       let water = containerHeight * (right - left)
       
       maxWater = Math.max(maxWater, water)
       
       if (height[left] < height[right]) {
          left++
       } else right--
       
    }

    return maxWater

};

console.log(maxArea([2,3,4,5,18,17,6]))