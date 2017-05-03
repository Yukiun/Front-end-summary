> vue2.3.0正式发布 新版了带来一些改进和 bug 修复

> 改进:
- 改进服务器端的渲染(SSR)
```
要求一下最低版本的vue和支持库
vue & vue-server-renderer >= 2.3.0
vue-router >= 2.5.0
vue-loader >= 12.0.0 & vue-style-loader >= 3.0.0

```
- 改进异步组件
- 改进功能组件
官方为vue创建了一个[全新的服务器渲染指南](https://ssr.vuejs.org/en/)
> bug修复
- #5238, #5387 fix v-model not syncing for autocomplete / switching focus before confirming composition
- #5318 fix style diffing on cached/slot elements
- #5346 fix keep-alive cache incorrectly pruned with transition mode=”out-in”
- #5361 fix Symbol check error in Node 4.x
- #5394 fix duplicate attribute warning when using class and :class together in Edge
- #5398 fix v-model checkbox binding with Array index (@posva via #5402)
- #5464 fix incorrect compiler warning for $delete usage in templates
- #5480 allow slot names to be number 0 (@posva via #5481)
- #5526 fix text inside <script type="x/template"> being unnecessarily decoded
- vue-class-component#87 fix base class lifecycle hook dropped when constructor options are modified before applying global mixin
详情参阅 [发布说明](https://github.com/vuejs/vue/releases/tag/v2.3.0)
[参考](http://www.oschina.net/news/84255/vue-2-3-0-released)