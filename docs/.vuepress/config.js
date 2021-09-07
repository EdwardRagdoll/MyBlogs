module.exports = {
    title: 'Edward\'s blog',
    description: '六耳石猴',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/MyBlogs/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            { text: '小蓝鸟', link: 'https://baidu.com' },
            { text: '日记', link: '' },
            { text: '周年回顾', link: '' }
        ],
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};