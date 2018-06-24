function Observer(data) {
    this.data = data;
    this.walk(data);
}
ObServer.protoType = {
    walk: function(data) {
        var me = this;
        Object.keys(data).forEach(function(key){
            me.convert(key, data[key]);
        })
    },
    convert: function(key, val) {
        this.defineReactive(this.data, key, val);
    },
    defineReactive: function(data, key, val){
        var dep = new Dep();
        var childObj = observer(val);
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: false,
            get: function() {
                if(Dep.target) {
                    dep.depend();
                }
                return val;
            },
            set: function(newVal) {
                if(newVal === val) {
                    return;
                }
                val = newVal;
                childObj = ob(newVal);
                // 通知订阅者
                dep.notify();
            },
        })
    },
};
