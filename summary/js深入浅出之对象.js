// 对象标签
// 1，[[proto]] 对象的原型

obj => obj.prototype => Object.prototype => null

// 2,[[class]]对象的类型
var toString = Object.prototype.toString;
function getType(o) {
    return toString.call(o).slice(8, -1);
}
toString.call(null); // [object. Null];

// 3,[[extensible]]标签 是否可拓展
var obj = {x: 1, y: 2};
Object.isExtensible(obj); // true
Object.preventExtensions(obj);  // 阻止对象拓展
Object.isExtensible(obj); // false

obj.z = 1;
obj.z; // undefined ,add new property failed
Object.getOwnPropertyDescriptor(obj, 'x'); 
// Object.getOwnPropertyDescriptor(对象，对象的某个属性)，可以的到对象的某个属性的属性标签
// object{ value, 1, writable: true, enumerable: true, configurable: true};

Object.seal(obj); // 会把对象的属性标签 configurable 设置为false
Object.getOwnPropertyDescriptor(obj, 'x'); 
// object{ value, 1, writable: true, enumerable: true,configurable: false};
Object.isSealed(obj); // true 

Object.freeze(obj); // 会把对象的属性标签  writable enumerable configurable 设置为false 
Object.getOwnPropertyDescriptor(obj, 'x'); 
// object{ value, 1, writable: false, enumerable: false,configurable: false};
Object.isFrozen(obj); // true

// ===========

// 对象序列化

将对象转化为字符串
var obj = {x: 1, y: 2};
JSON.stringify(obj);
// 将字符串转化为对象
JSON.parse('{}');

对象序列化自定义

var obj = {
    x: 1,
    y: 2,
    o: {
        o1: 3,
        o2: 4,
        toJSON: function() {
            return this.o1 + this.o2;
        }
    }
}
JSON.stringify(obj); //  "{"x":1,"y":2,"o":7}"

其他对象方法
var obj = {x: 1, y: 2};
obj.toString();
obj.toString = function () {
    return this.x + this.y;
}
"Result" + obj; // "Result3" ,by toString
+ obj;  // 3 ,from toString

obj.valueOf = function() {
    return this.x + this.y + 100;
}
+ obj; // 103, from valueOf 

"Result" + obj; // still "Result 103"

valueOf 把对象转化为基本类型时调用
先去寻找valueOf,再去寻找toString, 若valueOf返回一个基本类型，则不再去寻找toString();

