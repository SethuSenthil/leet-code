/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let seenNums = new Set();

    for(let i = 0; i < nums.length; i++){
        const thisNum = nums[i];

        if(seenNums.has(thisNum))
            return true;
        
        seenNums.add(thisNum);
    }

    return false;
};
