
// 1,overflow: hidden;
// 2,给父级加高度
// 3,加clear伪类
// .clear {
//     display: block;
//     content: '';
//     clear: both;
// }

// 1,自适应布局:为不同类别的设备建立不同的网页，检测到设备分辨率大小后调用相应的网页
// 2,响应式布局:建立一个网页，通过CSS Media Queries，Content－Based Breakpoint（基于内容的断点）等技术来改变网页的大小以适应不同分辨率的屏幕

// 1,title: 是鼠标放到图片上显示的文字
// 2,alt: 是图片显示不出来时显示的代替文字

// 1,href后面是链接地址 <a href="网址">连接内容</a>,建立和当前元素（锚点）或当前文档（链接）之间的链接
// 2,而scr往往是内容的地址，比如iframe的src就是指其中网页的地址。

// Q: 输出今天是星期几
// const date = new Date();
// const arr = [ '日', '一', '二', '三', '四', '五', '六', ];
// const week = date.getDay();
// console.log(`今天是星期${arr[week]}`);

// 循环显示倒计时
// const timer = setInterval(getTime, 1000);
// function getTime() {
//     const date = new Date();
//     const nowYear = date.getFullYear();
//     const nextYear = `${nowYear + 1}-01-01`;
//     const nextDate = new Date(nextYear);
//     const restTime = (nextDate.getTime() - date.getTime()) / 1000;
//     if(restTime >= 0) {
//         const day = parseInt(restTime / 86400);
//         //换算成小时
//         const hours = parseInt(restTime % 86400 / 3600);
//         // 换算成 分
//         const minutes = parseInt(restTime % 86400 % 3600 / 60);
//         // 换算成秒
//         const seconds = parseInt(restTime % 86400 % 3600 % 60);
//         console.log(`距离${nextYear}年还有${day}天${hours}小时${minutes}分钟${seconds}秒`);
//     } else {
//         clearInterval(timer);
//         console.log(`距离${nextYear}年还有0天0小时0分钟0秒`);
//     }
// }

// 数组去重

// const arr = [1, 3, 4, 5, 2, 3, 4];
// console.log([...new Set(arr)]);

// 根据给定顺序符号 order，对一个无序数组 nums 进行排序。
// 示例1：
// 输入：
//   nums = [12, 3, 1, 5, 34, 10, 22]
//   order = '>'
// 输出：
//   [34, 22, 12, 10, 5, 3, 1]

// 示例2：
// 输入：
//   nums = [12, 3, 1, 5, 34, 10, 22]
//   order = '<'
// 输出：
//   [1, 3, 5, 10, 12, 22, 34]

let nums = [12, 3, 1, 5, 34, 10, 22];
function sortArr(arr, order) {
    if(order === '<') {
        console.log(arr.sort());
    } else if(order === '>') {
        console.log(arr.sort(-1));
    }
}
console.log(sortArr(nums, '<'));