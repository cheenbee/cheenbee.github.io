/images# SVN迁移到git


#### 1.创建svn-git用户映射
将svn提交记录中的用户名映射到git提交记录中,即将svn中的用户名修改成在git中你想要修改成的用户名,从 SVN 用户名到 Git 作者的一个映射关系建立一个叫做 users.txt 的文件,映射格式如下:
```
zhangsan = Zhang San <zhangsan@live.com>
lisi = Li Si <lisi@live.com>
```

#### 2.获取SVN仓库到本地git仓库

通过 git svn clone 命令可以把整个 SVN 仓库导入到一个本地的 git 仓库中, 但这样导入的代码提交历史很糟糕, 需要做一些处理. 在 clone 后面添加 --no-metadata 来阻止 git svn 包含那些 SVN 的附加信息。同时为了获得更精确的提交者 ID 和邮箱, 添加 --authors-file 参数

* 标准SVN层级目录布局
    如果你的SVN工程使用的是标准 /trunk, /branches, /tags目录层级结构,你可以使用 --stdlayout 参数将对应的分支和标签放到git仓库结构中.
    `git svn clone --stdlayout --authors-file=users.txt <svn-repo>/<project> <git-repo-name>`
    
![](/images/15042568466459/15042597805655.jpg)

* 非标准SVN层级目录布局
    
    
![](/images/15042568466459/15042598743263.jpg)



git svn clone svn://43.243.139.75/MallAndroid/ThisMall --authors-file=users.txt --no-metadata --no-minimize-ur --trunk=trunk --branches=branches --tags=tags


