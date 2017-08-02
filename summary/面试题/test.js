// function a(xx) {
//     this.x = xx;
//     return this;
// }
// var x = a(5);
// var y = a(6);
// console.log(x.y); // undefined
// console.log(y.x); // 6

// function Foo() {
//     getName = function() {
//         console.log(1);
//     };
//     return this;
// }
// Foo.getName = function () {
//     console.log(2);
// }
// Foo.prototype.getName = function () {
//     console.log(3);
// }
// var getName = function () {
//     console.log(4);
// }
// function getName() {
//     console.log(5);
// }
// Foo.getName(); // 2
// getName(); // 4 
// Foo().getName(); // Foo(...).getName is not a function
// getName(); // 4
// new Foo.getName(); // Foo is not defined
// console.log(new Foo().getName);  // [Function]
// new new Foo().getName(); // 3
// function add(xPromise, yPromise) {
//     // Promise.all([..]);
//     return Promise.all([xPromise, yPromise])
//             .then(function(values) {
//                 return values[0] + values[1];
//             })
// }
// add(fetchX(), fetchY()).then(function(sum) {
//     console.log(sum);
// })
// 理解闭包的过程
// function foo() {
//     var a = 2;
//     function bar() {
//         console.log(a);
//     }
//     bar();
// }
// foo();

// function foo() {
//     var a = 2;
//     function bar() {
//         console.log(a);
//     }
//     return bar;
// }
// var baz = foo();
// baz();

// var fn;
// function foo() {
//     var a = 2;
//     function baz() {
//         console.log(a);
//     }
//     bar(baz);
// }
// function bar(fn) {
//     fn();
// }
// foo();


// for(var i = 1; i <= 5;i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i*1000)
// }
// 6
// for (var i = 1; i <= 5; i++) {
//     (function () {
//         setTimeout(function timer() {
//             console.log(i);
//         }, i * 1000)
//     })()
// }
// 6
// for (var i = 1; i <= 5; i++) {
//     (function () {
//         var j = i;
//         setTimeout(function timer() {
//             console.log(j);
//         }, i * 1000)
//     })()
// }
//  1,2,3,4,5
// for (var i = 1; i <= 5; i++) {
//     let j = i;
//     setTimeout(function timer() {
//         console.log(j);
//     }, j * 1000)
// }

// for (let i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000)
// }

// this
// var obj = {
//     id: 'awesome',
//     cool: function coolFn() {
//         console.log(this.id);
//     }
// }
// var id = 'not awesome';
// obj.cool();
// setTimeout(function() {
//     obj.cool
// }, 100);

// function GetBytes(str) {
//     var len = str.length;
//     var bytes = len;
//     for (var i = 0; i < len; i++) {
//         if (str.charCodeAt(i) > 255) bytes++;
//     }
//     return bytes;
// }

// console.log(GetBytes("你好,as"));
