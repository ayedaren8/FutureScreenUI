module.exports = {
    title: 'Future Screen UI',
    description: '智慧行业数据可视化组件库',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }]
    ],
    themeConfig: {
        search: false,
        logo: '/logo.png',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: '组件',
                link: '/components/'
            },
            {
                text: '设计',
                link: 'https://google.com'
            },
        ],
        sidebar: {
            '/components/': [
                '',
                'button'
            ]
        }
    }
}