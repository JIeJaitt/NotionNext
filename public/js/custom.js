// 这里编写自定义js脚本；将被静态引入到页面中

// 创建一个链接元素
var linkElement = document.createElement('link');

// 设置rel属性
linkElement.rel = 'apple-touch-icon';

// 设置href属性
linkElement.href = '/favicon.ico';

// 将链接元素添加到文档的头部
document.head.appendChild(linkElement);
