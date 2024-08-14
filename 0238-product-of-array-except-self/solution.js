/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
         let ans = [];
         
         let currentProd = 1;

         // prefix 
         nums.forEach((num, i) => {
            ans.push(currentProd);
            currentProd *= num;
         });

         currentProd = 1; //reset for postfix

         // postfix
         for(let i = nums.length -1; i >= 0; i--){
            const num = nums[i];

            ans[i] *= currentProd;

            currentProd *= num;
         }
    
         
         return ans;
};
