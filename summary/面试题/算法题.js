// 判断一个单词是否是回文
// function checkPaliandom(str) {
//     return str == str.split('').reverse().join('');
// }

// 数组去重
// 1, [...new Set(array)]
// 2，方法2，通过indexOf()
// const arr = [1,2,3,1,2,3];
// let arr1 = [];
// function unique(arr) {
//     for(let i = 1; i < arr.length; i++) {
//         if(arr1.indexOf(arr[i]) == -1) {
//             arr1.push(arr[i]);
//         }
//     }
//     console.log(arr1);
// }
// unique(arr);
// 3,通过对象,利用key来筛选
// let unique = function(arr) {
//     let hashTable = {};
//     let data = [];
//     for(let i = 0;i < arr.length;i++){
//         if(!hashTable[arr[i]]) {
//             hashTable[arr[i]] = true;
//             data.push(arr[i]);
//         }
//     }
//     console.log(hashTable, data);
//     return data;
// }
// unique([3,3,3,1,1,1,3,33,3,2,2,1])
// 统计字符串出现次数最多的字母

// const str = 'abcdaddfnjdnsssaaq';
// function findMaxDuplicateChar(str){
//     if(str.length == 1){
//         return str;
//     }
//     let obj = {};
//     for(let i = 0;i<str.length;i++) {
//         if(obj[str[i]]){
//             obj[str[i]]++;
//         } else {
//             obj[str[i]] = 1;
//         }
//     };
//     let maxChar = '';
//     let maxNum = 1;
//     for( value in obj) {
//         if(obj[value] >= maxNum) {
//             maxChar = value;
//             maxNum = obj[value];
//         }
//     }
//     console.log(`出现最多的字母是${maxChar},出现了${maxNum}次`);

// };
// findMaxDuplicateChar(str)

// 排序算法
// 冒泡排序
// function bubbleSort(arr) {
//     for(let i = 0;i < arr.length;i++) {
//         for(let j = 0; j< arr.length - i -1;j++){
//             if(arr[j] > arr[j+1]) {
//                  let temp = arr[j];
//                  arr[j] = arr[j+1];
//                  arr[j+1] = temp;
//             }
//         }
//     }
//     // console.log(arr);
//     return arr;
// }
// console.log(bubbleSort([3,6,2,4,9]));

// 快速排序
// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     let leftArr = [];
//     let rightArr = [];
//     let q = arr[0];
//     for(let i = 1;i<arr.length;i++) {
//         if(arr[i]>q) {
//             rightArr.push(arr[i]);
//         } else {
//             leftArr.push(arr[i]);
//         }
//     }
//     return [].concat(quickSort(leftArr),[q],quickSort(rightArr));
// }
// console.log(quickSort([3, 6, 2, 4, 9]));

// 不借助临时变量，进行两个整数的交换
// function swap(a, b) {
//     b = b - a;
//     a = a + b;
//     b = a - b;
//     return [a,b];
// }

// 

