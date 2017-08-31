/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const arr = nums || [];
    const goal = target || 0;
    let result = [];
    const len = arr.length;

    for (let i = 0; i < len; i++) {

        for (let k = i + 1; k < len; k++) {

        	if(arr[i] + arr[k] === goal){
        		return [i,k];
        	}
        }
    }

    return result
};


module.exports = twoSum;