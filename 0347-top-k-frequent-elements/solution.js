/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
         let freqMap = new Map();
        
        // Count the frequency of each number
        nums.forEach(num => {
            let mapVal = freqMap.get(num) || 0;
            freqMap.set(num, mapVal + 1);
        });

        // Initialize the bucket array with empty arrays
        let bucket = Array(nums.length + 1).fill().map(() => []);

        // Populate the bucket array where index represents frequency
        freqMap.forEach((value, key) => {
            bucket[value].push(key);
        });

        let ans = [];
        // Traverse the bucket array from the end to get the most frequent elements
        for (let i = bucket.length - 1; i >= 0; i--) {
            if (bucket[i].length > 0) {
                ans = [...ans, ...bucket[i]];
            }
            if (ans.length >= k) {
                break;
            }
        }

        return ans.slice(0, k);
};
