# Mac 使用技巧
## Mac 相机不可用解决方法
####使用相机的线程没有被释放
1. `$ sudo killall VDCAssistant`
2. 关机重启

## 显示隐藏 Finder 目录和文件
####打开<终端> - 粘贴命令执行
1. 显示: defaults write com.apple.finder AppleShowAllFiles TRUE killall Finder
2. 隐藏: defaults write com.apple.finder AppleShowAllFiles FALSE killall Finder

#####使用快捷键组合 command+shift+. 可以快速隐藏显示隐藏文件

## 下载苹果开发工具合集
https://developer.apple.com/download/more/

## 关闭 SIP
1. 重启系统，开机时按住 command + R 不放，直到进入恢复模式。
2. 点击实用工具菜单，打开终端，执行csrutil disable命令，再重启系统



