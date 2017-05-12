// 1,判读是否为回文数
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (/-/.test(x)) {
        return false;
    };
    var y = String(x).split('');
    var result = y.reverse().join('')
    if (parseInt(result) === x) {
        return true;
    } else {
        return false;
    }
};
console.log(reverse(-1221));

// 2,反转一个数字如: 123 => 321; -123 =>-321;超出32位字符返回0
var reverse = function(x) {
    var max = 2147483647;
    var min = -2147483648;
    if(/-/.test(x)) {
        var z = x.toString().split('-')[1].split('');
        var result = '-' + z.reverse().join('');
    } else {
        var y = x.toString().split('');
        var result =  y.reverse().join('')
    }
    if(Number(result) > max || Number(result) < min) {
        return 0;
    }
    return Number(result);
};
// 3,Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }
};

