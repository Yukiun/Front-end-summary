const count = {
    a: 0,
    b: 0,
    c: 0,
};
const cache = {
    a: {},
    b: {},
    c: {},
};
const arr = [];
for (let i = 0; i < 1000000; i++) {
    arr.push(1);
}
function a(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            cache.c[i] = nums[i];
        } else {
            cache.c[i] = Math.max(nums[i], cache.c[i - 1]);
        }
    }
    for (let i = 1; i < nums.length; i++) {
        if (i === 1) {
            cache.b[i] = nums[i] * nums[i - 1];
        } else {
            cache.b[i] = Math.max(cache.c[i - 1],nums[i] * cache.b[i - 1]);
        }
    }
    for (let i = 2; i < nums.length; i++) {
        if (i === 2) {
            cache.a[i] = nums[i] * nums[i - 1] * nums[i - 2];
        } else {
            cache.a[i] = Math.max(cache.a[i - 1],nums[i] * cache.b[i - 1]);
        }
    }
    return cache.a[nums.length - 1];
}
console.log(a(arr));
console.log(count);
// 0.961s









// cache.a[4] 长度4的数组中三个数乘积最大值
// cache.b[10] 长度10的数组中俩个数乘积最大值
// 找到数组中3个数乘积最大值
// function a(nums) {
//     if (cache.a[nums.length]) {
//         return cache.a[nums.length];
//     }
//     count.a++;
//     if (nums.length === 3) {
//         return nums[0] * nums[1] * nums[2];
//     }
//     const subNums = nums.slice(0, nums.length - 1);
//     const value1 = a(subNums);
//     const value2 = nums[nums.length - 1] * b(subNums);
//     return cache.a[nums.length] = Math.max(value1, value2);
// }
// // 找到数组中2个数乘积最大值
// function b(nums) {
//     if (cache.b[nums.length]) {
//         return cache.b[nums.length];
//     }
//     count.b++;
//     if (nums.length === 2) {
//         return nums[0] * nums[1];
//     }
//     const subNums = nums.slice(0, nums.length - 1);
//     const value1 = b(subNums);
//     const value2 = nums[nums.length - 1] * c(subNums);
//     return cache.b[nums.length] = Math.max(value1, value2);
// }
// // 找到数组中最大值
// function c(nums) {
//     if (cache.c[nums.length]) {
//         return cache.c[nums.length];
//     }
//     count.c++;
//     return cache.c[nums.length] = Math.max(...nums);
// }