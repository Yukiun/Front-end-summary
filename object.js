// 1， var f = function g() {
//     return 23;
// }
// console.log(typeof f()); number
// console.log(typeof g()); g is not defined;

// var A = {
//     n: 4399,
// };
// var B = function () {
//     this.n = 9999;
// };
// var C = function () {
//     var n = 8888;
// };
// B.prototype = A;
// C.prototype = A;
// var b = new B();
// var c = new C();
// A.n++;
// console.log(b.n);
// console.log(c.n);
// (function () {
//     var x = foo;
//     var foo = function foo() {
//         return "foobar";
//     };
//     console.log(x);
//     return x;
//  })();

// function Foo() {
//     var i = 0;
//     return function() {
//         console.log(i++);
//     }
// }
// var f1 = Foo();
// var f2 = Foo();
// f1();
// f1();
// f2();

// 求数组arr中的最大的值
// 方法一： 0.072s
// var arr = [[1, 2, ,3], 4, -1, [11, 22, 33, 45, [7, 123, 1]], 98, [[123]]];
// function maxOfArr() {
//     var targetArr = [];
//     // forEach为es5的数组迭代方法
//     // 展开多维数组为一维数组的函数，递归调用
//     var fnExpandArray = function (arr) {
//         arr.forEach(function(item) {
//             if (Array.isArray(item)) {
//                 fnExpandArray(item);
//             } else {
//                 targetArr.push(item);
//             }
//         });
//     }
//     fnExpandArray(arr);
//     // console.log(targetArr);

//     // 求出最大值得函数，假设第一个值为最大值，并且与后面的值进行比较
//     var fnMax = function (arr) {
//         var max = arr[0];
//         arr.forEach( function (item) {
//             if(item > max) {
//                 max = item;
//             }
//         })
//         return max;
//     }
// console.log('最大值是' + fnMax(targetArr));
// }
// maxOfArr();
// 方法二： 0.068s
// function maxAndMin(arr) {
//     return {
//         max: Math.max.apply(null, arr.join(',').split(',')),
//         min: Math.min.apply(null, arr.join(',').split(',')),
//     }
// }
// console.log(maxAndMin([[1, 2, ,3], 4, -1, [11, 22, 33, 45, [7, 123, 1]], 98, [[123]]]));

// 判断一个单词是否为回文
// function checkPalindrom(str) {
//     return str == str.split('').reverse().join('');
// }

// 去掉一组整型数组重复的值

// 方法一：
// let unique = function (arr) {
//     let hashTable = {};
//     let data = [];
//     for(let i = 0;i < arr.length; i++) {
//         if(!hashTable[arr[i]]){
//             hashTable[arr[i]] = true;
//             data.push(arr[i]);
//         }
//     }
//     console.log(data);
//     return data;
// }
// console.log(unique([1,3,4,5,4,1]));

// 方法二： 
// console.log([...new Set([1,2,3,1,3,5])]);

// 统计一个字符串出现最多的字母
// function findMaxDuplicateChar(str) {
//     if(str.length == 1) {
//         return str;
//     }
//     let charObj = {};
//     for(let i = 0;i<str.length;i++) {
//         // charAt(index) 返回指定位置的字符
//         if(!charObj[str.charAt(i)]) {
//             charObj[str.charAt(i)] = 1;
//         } else {
//             charObj[str.charAt(i)]+=1;
//         }
//     }
//     let maxChar = '';
//     let maxValue = 1;
//     for ( var k in charObj) {
//         if( charObj[k] >= maxValue){
//             maxChar = k;
//             maxValue = charObj[k];
//         }
//     }
//     return maxChar;
// }
// console.log(findMaxDuplicateChar('djsfbabaaa'));
// 找出数组中出现次数最多的元素，并给出其出现过的位置
// function getMaxAndIndex(arr) {
//     var obj = {};
//     arr.forEach(function(item,index){
//         if(!obj[item]) {
//             obj[item] = {indexs: [index]}
//         } else {
//             obj[item]['indexs'].push(index);
//         }
//     });
//     var num = 0; //
//     var str = ''; //
// }

// 排序算法
// 冒泡算法
// function bubbleSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j+1]) {        //相邻元素两两对比
//                 var temp = arr[j+1];        //元素交换
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([1,23,4,3]));
// 快速排序
// function quickSort(arr) {
//     if(arr.length <= 1) {
//         return arr;
//     }
//     let leftArr = [];
//     let rightArr = [];
//     let q = arr[0];
//     for(let i = 1; i<arr.length;i++) {
//         if(arr[i] > q) {
//             rightArr.push(arr[i]);
//         } else {
//             leftArr.push(arr[i]);
//         }
//     }
//     return [].concat(quickSort(leftArr),[q],quickSort(rightArr));
// }
// console.log(quickSort([1,23,4,3]));


