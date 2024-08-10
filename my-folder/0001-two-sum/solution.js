/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
 let visitedNums = new Map(); // Map contains the [value, index] pair

        for(let i = 0; i < nums.length; i++){
            const thisNum = nums[i];

            const neededNum = target - thisNum;

            const indexOfNeeded = visitedNums.get(neededNum);
            if(indexOfNeeded != undefined){
                return [indexOfNeeded, i];
            }

            visitedNums.set(thisNum, i);
        }
    
};
