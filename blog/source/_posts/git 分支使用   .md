# git 分支使用   

##### 理解 HEAD 指针
HEAD 指向当前分支引用的指针,也就是一个指向你的最后一次提交的指针,通常可以简单的认为 HEAD 就是你的最后一次提交的快照. Git 也是通过 HEAD 指针区分你当前在哪个分支上工作呢.      

##### 新建分支
```
//使用当前分支为父分支,新建名称为"newBranch"的分支,并将当前工作分支转换到 newBranch 分支
$ git checkout -b newBranch
```    

这相当于执行下面这两条命令    
```
$ git branch newBranch
$ git checkout newBranch
```

##### 在分支上修改内容
当你做了一些更改之后,将所做的修改提交到当前分支
`$ git -a -m "made some changes"`
##### 将分支合并到 master 分支
1. 先转到 master 分支
    `$ git checkout master`
2. git merge 命令后给出将要合并到 master 分支的名称
    `$ git merge newBranch`   
    
##### 删除分支
`$ git branch -d newBranch`

#### 多人协同开发 (开发环境)
由于团队只有两个人,所以我们开发环境使用 develop 分支, 线上生产环境使用 master 分支, 每发布一个新版本会给 master 分支打上 tag 用以区分对应的线上版本号

1. 由管理者 使用 master 分支为父分支,新建远程开发分支 develop
    * 从 master 分支基础上新建 develop 分支 `$ git checkout -b develop master`
    * 推送到远程仓库 `$ git push origin develop`
2. 协同开发者从服务器上克隆仓库,并建好 develop 分支的跟踪分支
  
    * $ git clone ssh://user@host/path/to/repo.git
    * $ git checkout -b develop origin/develop
    //此时协作者已经有了 develop 分支的本地拷贝,转换 develop 分支为当前使用分支

3. 当有所改动,直接在当前分支上提交变动,并推送到远程
    * `$ git commit -a -m "some changes"`
    * `$ git push origin develop`
4. 在需要发布新版本的时候,管理者将 develop 分支合并到 master
    * `$ git checkout master` // 转换当前分支到 master 分支
    * `$ git merge develop`   // 合并 develop 分支到 master 分支
    * `$ git push origin master` // 向远程仓库推送 master 更新  
5. 为master分支打上版本标签，再将master 分支做的改动合并回 develop 分支
    * `$ git checkout develop`
    * `$ git merge master`
    * `$ git push origin develop`

#### 本地功能分支的使用
当需要一段周期开发一个新功能时,建议在本地新建一个功能分支,在完成开发之后在合并

1. 使用 develop 分支为父分支新建功能分支 
    * `$ git checkout -b myfeature develop` //新建并转换到分支 "myfeature"
2. 在本地分支 "myfeature" 提交你的更改
3. 完成功能开发后,合并到 develop 开发分支
    * `$ git checkout develop`
    * `$ git merge myfeature`
4. 完成合并后,可以将功能分支删除
    * `$ git branch -d myfeature`
5. 推送 develop 分支最新数据到远程仓库
    * `$ git push origin develop`




### 参阅 & 收藏资料
[Git 学习总集](https://github.com/xirong/my-git)

[开发常用的分支模型](http://nvie.com/posts/a-successful-git-branching-model/)

[Git 分支 - 远程分支](https://git-scm.com/book/zh/v1/Git-分支-远程分支)

[如何用简单的语言解释 Git 的基础命令？](https://zhuanlan.zhihu.com/p/19845650)

[廖雪峰的 Git 教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

[猴子都能懂的 Git 入门](http://backlogtool.com/git-guide/cn/intro/intro1_1.html)

[git - 简明指南](http://rogerdudler.github.io/git-guide/index.zh.html)

[阮一峰的常用 Git 命令清单](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)

[Git Book](https://git-scm.com/book/en/v2)     

[梁杰制作的 ProGit 电子书](https://github.com/numbbbbb/progit-zh-pdf-epub-mobi)
[梁杰制作的廖雪峰 Git 教程电子书](https://github.com/numbbbbb/Git-Tutorial-By-liaoxuefeng)   




