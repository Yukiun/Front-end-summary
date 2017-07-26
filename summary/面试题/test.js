// function a(xx) {
//     this.x = xx;
//     return this;
// }
// var x = a(5);
// var y = a(6);
// console.log(x.y); // undefined
// console.log(y.x); // 6

function Foo() {
    getName = function() {
        console.log(1);
    };
    return this;
}
Foo.getName = function () {
    console.log(2);
}
Foo.prototype.getName = function () {
    console.log(3);
}
var getName = function () {
    console.log(4);
}
function getName() {
    console.log(5);
}
Foo.getName(); // 2
getName(); // 4 
Foo().getName(); // Foo(...).getName is not a function
getName(); // 4
new Foo.getName(); // Foo is not defined
console.log(new Foo().getName);  // [Function]
new new Foo().getName(); // 3