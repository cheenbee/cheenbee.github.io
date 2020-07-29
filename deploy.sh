#!/usr/bin/env sh

# 先将项目推送到vuepress分支
git add -A
git commit -m "添加新文档"
git push origin vuepress

git checkout vuepress_static
git merge vuepress

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'vuepress deploy'

# 如果发布到 https://<USERNAME>.github.io     vuepress_static分支需设置成默认主分支
git push -f git@github.com:cheenbee/cheenbee.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -