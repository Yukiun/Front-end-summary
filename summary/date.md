> 处理时间,获得昨天,明天,后天...以及对应的星期

```
const arr = [ '周日', '周一', '周二', '周三', '周四', '周五', '周六', ];
        function getDateStr(count) {
            if (count === 0) {
                return '今天';
            }
            const date = new Date();
            date.setDate(date.getDate() + count);
            const index = date.getDay();
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            return year + '-' + month + '-' + day + '(' + arr[index] + ')';
        }
        for (let i = 0; i < this.startDayItems.length; i++) {
            this.startDayItems[i] = getDateStr(i);
        }
        
        // 得出一个数组
        startDayItems: [ '今天', '2017-04-17（周二）', '2017-04-18（周三）', '2017-04-19（周四）', '2017-04-20（周五）', '2017-04-21（周六）', '2017-04-22（周日）', ],
        
```