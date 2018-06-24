> 使用vue开发微信公众号下SPA站点的坑

- 1,动态设置页面的title

```
微信网页里面，因为会在最上面显示页面的title，所以title的设置很重要。想当然的，我们会这么写
document.title = 'new title';
这句代码在android中是没问题的，但是在ios中却无效。 这个问题，应该说是ios的问题

解决办法
每次url变化的时候，都调用以下函数

module.exports = function (title) {
    document.title = title;
    const mobile = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(mobile)) {
        const iframe = document.createElement('iframe');
        iframe.style.visibility = 'hidden';
        // 替换成站标favicon路径或者任意存在的较小的图片即可
        iframe.setAttribute('src', 'https://www.runorout.cn/favicon.ico');
        const iframeCallback = function () {
            setTimeout(function () {
                iframe.removeEventListener('load', iframeCallback);
                document.body.removeChild(iframe);
            }, 0);
        };
        iframe.addEventListener('load', iframeCallback);
        document.body.appendChild(iframe);
    };
};

router.afterEach((transition) => {
    const title = transition.name;
    setWechatTitle(title);
});

```