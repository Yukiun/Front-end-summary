/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
/*
Input: flowerbed = [1,0,0,0,1], n = 1
Output: True

Input: flowerbed = [1,0,0,0,1], n = 2
Output: False
*/
var flowerbed = [1, 0, 0, 0,0,0,1];
var n = 2;
var canPlaceFlowers = function (flowerbed, n) {
    let count = 1;
    let result = 0;
    for (let i = 0; i <= flowerbed.length; i++) {
        if (flowerbed[i] == 0) {
            count++;
        } else {
            console.log(count, 'ooko');
            result += (count - 1) / 2;
            count = 1;
        }
    }
    if (count != 0) {
        result += count / 2
    };
    console.log(result);
    return result >= n;
};
console.log(canPlaceFlowers(flowerbed, n));