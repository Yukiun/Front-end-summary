/*
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var nums = [2, 6, 4, 8, 10, 9, 15];
var findUnsortedSubarray = function(nums) {
    let snums = nums.slice().sort();
    let s = -1;
    let e = -1;
    for( i in nums) {
        if(nums[i] !== snums[i]) {
            if(s == -1) {
                s = i;
            } else {
                e = i;
            }
        }
        if(e!=s) {
            return e - s + 1;
        } else{
            return 0
        }
    }
};
console.log(findUnsortedSubarray(nums));