#  发布应用到 App Store 流程
[TOC]
### Xcode 配置生产环境
* 确认 app 基本信息,此处的两个版本概念需要区分开, Version 对应 iTunes Connect中的版本, Build 是构建版本
![](http://maomilaoshi.top/14800439243159.jpg)

* 确保 Edit Scheme -> Archive -> Build Configuration 为 Release, 即设置打包为发布状态,其余选项不用作任何修改
![](http://maomilaoshi.top/14800440011716.jpg)
![](http://maomilaoshi.top/14800441446913.jpg)

* Build Settings (构建设置): Provisioning Profile 选择生产环境配置文件, Code Signing Identity 中的 Release 选项选择生产证书, Debug模式不用改变,若嫌麻烦又想要确保万无一失可将所有选项都选择生产模式(配置证书可参考[此篇文章](http://www.jianshu.com/p/27d227015e75))
![](http://maomilaoshi.top/14800451900877.jpg)

* 选择通用 iOS 设备或真机进行打包
![](http://maomilaoshi.top/14800465060955.jpg)


## 上传应用程序二进制文件

### 使用 Xcode 一条龙直接上传应用程序二进制文件
* 在上传到 App Store 之前最好先进行验证,验证通过再进行上传
![](http://maomilaoshi.top/14800411860690.jpg)

* 验证通过,上传到 App Store, 根据提示完成上传步骤,选择开发者账号
![](http://maomilaoshi.top/14800490721908.jpg)

* 根据提示选择上传
![](http://maomilaoshi.top/14800492328297.jpg)

* 等待上传成功(上传的过程中也会进行验证)
![](http://maomilaoshi.top/14800492951001.jpg)

### 使用 [Application Loader](http://help.apple.com/itc/apploader/#/apdATD1E927-D1E1A1303-D1E927A1126) 上传应用程序二进制文件
* 导出并保存应用 ipa 文件 
![](http://maomilaoshi.top/14800414111351.jpg)

* 选取导出的 ipa 文件进行上传
![](http://maomilaoshi.top/14800430871993.jpg)

* 遇到一个警告通知,没有影响,直接忽略进行下一步即可完成上传
![](http://maomilaoshi.top/14792032573888.jpg)


#### 可能遇到的问题
* 网络连接问题,请重试. 如重复出现此错误,建议挂个 vpn 重试,或者使用苹果官方的另一个上传工具 [Application Loader](http://help.apple.com/itc/apploader/#/apdATD1E927-D1E1A1303-D1E927A1126) 进行上传
![](http://maomilaoshi.top/14800574376607.jpg)


* 已经存在一个相同 build版本号文件,重复上传错误
![](http://maomilaoshi.top/14800574705417.jpg)



### ITunes Connect 中的操作
* 新建版本,此时需要输入的版本号与Xcode中项目的 Version 一致即可,更新也是如此
![](http://maomilaoshi.top/14800559825875.jpg)
* 上传到 App Store 完成之后等待几分钟,刷新页面可以看到选择构建版本提示
![](http://maomilaoshi.top/14792041620320.jpg)

* 选择你上传的构建版本
![](http://maomilaoshi.top/14800356039234.jpg)

* 填写其余相关信息就可以发布应用了
![](http://maomilaoshi.top/14918073552392.jpg)

### 已经验证的小疑问
1. 先打包上传应用到 App Store 之后,再到 ITunes Connect 创建与之对应的版本,担心之前上传的构建版本会丢失在异次元中,而再次上传却提示此build版本已经存在
    答: 在ITunes Connect中构建版本无论是在打包上传之前还是之后,只要你构建的版本(version)与你打包的应用二进制文件版本一致,等待片刻,就会在选择构建版本中见到你上传的构建版本
2. 更新应用的 Version 版本号和 build 版本号必须大于之前的版本号和 build版本号即递增,否则无法新建版本更新应用  

### Version 与 Build 浅谈
1. Version 版本号建议使用 **1.2.3** 三段式数字进行递增,小打小闹式的改动递增第三段数字,轻微变动递增第二段数字,改头换面式的大型改动递增第一段数字
2. Build 编译号指一次唯一编译标识,通常是一个递增整数,建议从 1 开始每构建一个构建版本 +1.一个版本号下可以有多个不同的构建版本供以选择 
3. **iTunes Connect** app是苹果官方提供的,可在手机上实时查看开发者应用最新信息的应用, 在 iTunes Connect 应用的设置页面可以看到其对应的 Version(Build) 版本号
![](http://maomilaoshi.top/14800557453606.jpg)

#### PS: 
1. 用 altool 上传您的应用程序二进制文件, 命令行工具来验证并上传应用程序二进制文件到 App Store,[官方文档链接在此](http://help.apple.com/itc/apploader/#/apdATD1E53-D1E1A1303-D1E53A1126)
2. 在 iTunes Connect 我的 App 价格与销售范围中可以选择将 app 下架
![](http://maomilaoshi.top/14800582687921.jpg)


### 参阅资料
[About iTunes Connect](https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/About.html)
[Creating Your Team Provisioning Profile](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppStoreDistributionTutorial/CreatingYourTeamProvisioningProfile/CreatingYourTeamProvisioningProfile.html)
[浅谈 iOS 版本号](https://segmentfault.com/a/1190000002423661)

