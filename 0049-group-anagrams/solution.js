/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let countMap = new Map();

    strs.forEach((str) => {
        let sortedStr = str.split("").sort().join("");

        let entry = countMap.get(sortedStr) ?? [];

        entry.push(str);

        countMap.set(sortedStr, entry);
    });

    const ans = [];

    countMap.forEach((subArr) => {
        ans.push(subArr);
    });

    return ans;

}
