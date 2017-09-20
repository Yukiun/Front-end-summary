以下是各种数据的来龙去脉：

文件mian.html :  {{> postsList}}    //指定模版名字postsList

文件post_list.html ： <template name="postsList">    //模板postsList

文件post_list.js ： Template.postsList.helpers({ posts: postsData });    //通过helpers为postsList模板关联数据，数据赋值给posts对象

文件post_list.html ： {{#each posts}}  {{> postItem}}  {{/each}}    //遍历posts对象，并调用postItem模板

文件post_item.html ： <template name="postItem">    //postItem模板展示数据

是时候来介绍 Meteor 的模板系统 Spacebars 了。Spacebar 就是简单的 HTML 加上三件事情：Inclusion（有时也称作 “partial”）、Expression 和 Block Helper。
Inclusion ：通过 {{> templateName}} 标记，简单直接地告诉 Meteor 这部分需要用相同名称的模板来取代（在我们的例子中就是postItem ）。
Expression ：比如 {{title}} 标记，它要么是调用当前对象的属性，要么就是对应到当前模板管理器中定义的 helper 方法，并返回其方法值（后面会详细讨论）。
Block Helper ：在模板中控制流程的特殊标签，如 {{#each}}…{{/each}} 或 {{#if}}…{{/if}} 。