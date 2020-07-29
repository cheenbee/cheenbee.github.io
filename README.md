## install
1. 下载项目
git clone https://github.com/cheenbee/cheenbee.github.io.git
git checkout vuepress

2. 将 VuePress 安装为本地依赖
```
yarn add -D vuepress # npm install -D vuepress
```

3. 在docs/对应的目录中新建XXX.md文件,文件中要含有 h2/h3 标题 XXX
4. 在docs/.vuepress/config.js中添加目录
```
sidebar: [
          {
              title: '序章',
              path: '/intro',
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                  '/intro/XXX'
              ]
          },
]
```

在本地启动服务器
```
yarn docs:dev # npm run docs:dev
```

终端执行命令，部署到githubpages
```
/bin/bash deploy.sh
```
