var addTwo = function(nums, target){
    let arrLength = nums.length
    for(let i=0; i<arrLength; i++){
        for(let j=i+1; j<arrLength; j++){
            sum= nums[i] + nums[j];
            if (sum == target){
                return [i, j]
            }
        }
    }
}
console.log(addTwo([2, 7, 11, 15], 9))
console.log(addTwo([3, 2, 4], 6))
console.log(addTwo([2, 4, 6, 8, 10], 14))