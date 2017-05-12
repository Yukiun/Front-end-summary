// 1,属性的简洁表示法
const birth = '2017/01/01';
const Person = {
    name: '张三',
    birth, // 等同于birth: birth
    hello() {
        console.log('我的名字是', this.name);
    },
    // hello: function(){},
}
// 用于函数的返回值
function getPoint() {
    const x = 1;
    const y = 10;
    return [x, y];
}
gePoint();// {x: 1, y: 10};

// CommonJS模块输出变量
const ms = {};
function getItem (key) {
    return key in ms ? ms[key] :null;
}
function setItem (key, value) {
    ms[key] = value;
}
function clear () {
    ms = {};
}
module.exports = { getItem, setItem, clear };
// 等同于
module.exports = {
    getItem: getItem,
    setItem: setItem,
    clear: clear,
};
// 简洁写法的属性名总是字符串,class是字符串
const obj = {
    class() {
        //
    }
}
const obj = {
    'class': function() {

    }
}
// 如果某个方法的值是一个Generator函数,前面需要加上*号
const obj = {
    * m() {
        yield 'hello world';
    }
}

// 2,属性名表达式
obj.foo = true;
obj['a' + 'bc'] = 123;

const obj = {
    foo: true,
    abc: 123,
};

// 用表达式作为对象的属性名,即把表达式放在方括号内
let proKey = 'foo';
let obj = {
    [proKey]: true,
    ['a' + 'bc']: 123,
};
// 表达式还可以用于定义方法名
let obj = {
    ['h' + 'ello']() {
        return 'hi';
    }
}
obj.hello();
