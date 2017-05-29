1，取消默认行为和阻止冒泡

DOM中的事件对象
preventDefault(); 取消事件默认行为
stopImmediatePropagation() 取消事件冒泡同时阻止当前节点上的事件梳理程序被调用
stopPropagation(); 取消事件冒泡对当前节点无影响
IE中的事件对象
cancelBubble() 取消事件冒泡
returnValue() 取消事件默认行为

2，ajax事件
$.post(url) 是ajax请求
ajaxComplete(callback)
ajaxError(callback)
ajaxSend(callback)
ajaxStart(callback)
ajaxStop(callback)
ajaxStop(callback)
ajaxSuccess(callback)

3，解释性语言与编译性语言
计算机不能理解高级语言，只能直接理解机器语言，必须把高级语言翻译成机器语言，计算机才能执行高级语言编写的程序
翻译的方式有两种，一种是编译，一种是解释，两种方式只是翻译的时间不同
解释性语言
解释性语言的程序不需要编译，在运行程序的时候才需要翻译，每个语句都需要在执行的时候翻译。这样解释性语言每执行一次就需要逐行翻译一次，效率比较低。
编译性语言
编译性语言写的程序在被执行之前，需要一个专门的编译过程，把程序编译成为机器语言的文件。比如exe文件，以后要运行的话就不用重新翻译了，直接使用编译的结果就行了（exe文件），因为翻译只做了一次，运行时不需要翻译，所以编译型语言的程序执行效率高。
非独立：JavaScript语言依赖执行环境，对于客户端来说是浏览器，对于服务端来说是node。
效率低：执行前不需要编译，执行时才编译，因此效率低。

