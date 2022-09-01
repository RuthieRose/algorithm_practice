var intersection = function(nums) {
    
    let frequency = {}
    let result = []
    
    for (let i = 0; i < nums.length; i++) {
        let array = nums[i]
        for (let j = 0; j < array.length; j++) {
            let num = array[j]
            console.log(array, num)
            if (frequency[num]) frequency[num]++
            else frequency[num] = 1
            console.log(frequency, 'after')
        }
    }
        
    
    for (let key in frequency) {
        if (frequency[key] = nums.length) result.push(key)
    }
    
    console.log(frequency)
    return result
};

console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))