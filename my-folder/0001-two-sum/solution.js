/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let resArr = null;

    for(let i = 0; i < nums.length; i++){
        const thisNum = nums[i];
        
        const neededNum = target - thisNum;
        
        console.log('needednum', neededNum)

        for(let j = i + 1; j < nums.length; j++){
            if(neededNum === nums[j]){
                resArr = [i, j];
                break;
            }
        }
        
        if(resArr != null){
        	break;
        }
    }

    return resArr;
    
};
