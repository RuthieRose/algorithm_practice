
var numberOfArithmeticSlices = function(nums) {

    if (nums.length < 3) return 0;
    
    let returnArray = [];

    let pointer1 = 0;

    while (pointer1 < nums.length - 2) {

     let num1 = nums[pointer1];

     let pointer2 = pointer1 + 1
     let pointer3 = pointer2 + 1

     let num2 = nums[pointer2];
     let num3 = nums[pointer3];
     
     let diff = num2 - num1;
     let workingArray = [num1,num2]

      while (workingArray.length > 0 && pointer3 < nums.length) {

       if (diff === num3 - num2) {
        // initial 3
        workingArray = [...workingArray, num3]
        returnArray.push(workingArray)
       } else {
        workingArray = [];
       }

       pointer2++
       pointer3++
   

       num2 = nums[pointer2];
       num3 = nums[pointer3];

       }
      pointer1++
      console.log(pointer1)
    }
    console.log(returnArray)
    return returnArray.length;
};

console.log(numberOfArithmeticSlices([1,2,3,4,5,6]))

