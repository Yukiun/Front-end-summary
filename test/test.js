// var http = require('http');
// var counter = 0;
// var server = http.createServer(function(req, res) {
//     counter++;
//     res.write('I have been accessed' +counter + 'times.');
//     res.end();
// }).listen(8888);

function foo(x, y, z) {
    function func() {};
    var func;
    console.log(func);
}
foo(100);
// function func() {}
function foo(x, y, z) {
    function func() {};
    var func = 1;
    console.log(func);
}
foo(100);
// 1

function fn(a) {
    console.log(a);
    var a = 2;
    function a() {};
    console.log(a);
}
fn(1);
// function a() {}
// 2
a();
//  ReferenceError: a is not defined
