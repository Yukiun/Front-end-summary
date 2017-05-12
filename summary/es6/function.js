// 1,函数参数的默认值
function log(x, y ='World') {
    console.log(x, y);
}

function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}
var p = new Point();
// 参数变量是默认声明的,所以不能用let和const再次声明
