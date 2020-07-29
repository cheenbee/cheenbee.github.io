module.exports = {
    title: '',
    description: '是起点不是终点',
    configureWebpack: {
        resolve: {
          alias: {
            '@image': 'assets/images'
          }
        }
      },

      themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
          ],

        sidebar: [
          {
              title: '序章',
              path: '/intro',
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                  '/'
              ]
          },
          {
            title: '前端',
            path: '/frontend',
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                '/'
            ] 
          },
          {
            title: '后端',
            path: '/backend',
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                '/'
            ] 
          },
          {
            title: '运维部署',
            path: '/DevOps',
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                '/'
            ] 
          },
          {
            title: '工具',
            path: '/tools',
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                '/tools/Mac自用安装软件' 
            ] 
          },
        ]
      }
  }