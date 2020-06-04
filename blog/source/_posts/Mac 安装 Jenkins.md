## Mac 安装 Jenkins
#### 安装 Jenkins 需要提前安装 JDK 和 Tomcat
##### 借助 Jenkins 实现自动化打包, 而网上的 Jenkins 安装教程都是一带而过,被卡在了这儿,遂做个安装记录
1. 安装 Java 开发环境 [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html),完成后在系统设置可查看
 ![](http://maomilaoshi.top/14797155421529.jpg)

2. 安装 Web 应用服务器 [Tomcat](http://tomcat.apache.org)
3. 安装 [Jenkins](https://jenkins.io/index.html)
    * 可以直接下载 pkg 安装包
    * 也可以使用 homeBrew 安装 : `brew cask install jenkins`  
    
浏览器访问 [http://localhost:8080](http://localhost:8080)
开始需要解锁 Jenkins ,密码被写在了 `/Users/Shared/Jenkins/Home/secrets/initialAdminPassword` 文件内
![](http://maomilaoshi.top/14797121671614.jpg)

到终端使用 `sudo cat` 命令查看随机生成的管理员密码,并拷贝粘贴至此即可
![](http://maomilaoshi.top/14797122553358.jpg)

开始安装插件(装逼)吧
![](http://maomilaoshi.top/14797122144731.jpg)




