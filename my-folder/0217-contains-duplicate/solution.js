/**
 * @param {number[]} nums
 * @return {boolean}
 */


var containsDuplicate = function(nums) {
    let myMap = new Set();
    let dupe = false;

    for(let i = 0; i < nums.length; i++){
        const thisElem = nums[i];
        if(!myMap.has(thisElem)){
            myMap.add(thisElem);
        }else{
            dupe = true;
            break;
        }
    }
    return dupe;
};
