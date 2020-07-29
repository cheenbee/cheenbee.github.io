 #  使用shell脚本拉取多个项目代码
 
###### 问题: 服务器上部署4个项目,每一次更新代码都要到不同的目录中去拉取代码,效率太低

###### 目标: 决定使用shell脚本 一行命令实现拉取所有的项目代码

###### 实现: 其实是把在服务器上要敲的命令集合在一个文件内,而服务器又可以解释执行这个文件

1. 在服务器上新建一个以**.sh**结尾的文件, `touch pull.sh` 

2. 将命令写入 pull.sh 文件中

    ```
    #!/bin/bash
    cd /usr/www/www.test.com
    git pull origin master
    cd /usr/www/admin.test.com
    git pull origin master
    cd /usr/www/m.test.com
    git pull origin master
    cd /usr/www/api.test.com
    git pull origin master
    chmod -R 777 runtime
    ```

3. 运行 `/bin/bash pull.sh` 即可

##### 下一步: 下一步使用git仓库 webhooks 触发自动拉取仓库代码
###### 思考: 负载上的多台服务器如何构建自动化


参考:
[Shell脚本编程30分钟入门](https://github.com/qinjx/30min_guides/blob/master/shell.md)


