/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let tracker = {}

    for(let i = 0; i < nums.length; i++){
        const num = nums[i]; //this num element
        
        if(tracker[num] != true){
            tracker[num] = true
        }else{
            return true;
        }
    }

    return false;
};
