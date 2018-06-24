var Cat = function (name){
    this.name = name;
    this.saying = 'menow';
}
.inherits(Mammal)
.methods('purr', function{
    var i, s = '';
    for(i = 0; i < n; i += 1){
        if(s){
            s += '-';
        }
        s += 'r';
    }
    return s;
})
.methods('get_name', function(){
    return this.says() + '' + this.name + '' + this.say();
})
// 原型
var myMammal = {
    name: 'Herb the Mammal',
    get_name: function (){
        return this.name;
    },
    says: function() {
        return this.saying || '';
    }
}

// Array.sort();
var by = function(name, minor){
    return function (o, p){
        var a, b;
        if(o && typeof o === 'object' && typeof p === 'object'){
            a = o[name];
            b = p[name];
            if(a === b){
                return typeof minor === 'function' ? minor(o ,p) : 0;
            }
            if(typeof a === typeof b){
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        }else{
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by' + name
            };
        }
    }
}