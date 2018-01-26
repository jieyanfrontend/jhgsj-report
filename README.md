# 江海工商局小程序项目
## 怎么获取
```$xslt
    git clone gituser@119.29.206.183:/var/git_repos/jh_mini.git
```
## 怎么使用
在项目根目录下运行以下命令(请确保已经安装了node.js)
首次使用
```$xslt
    npm i (安装项目依赖)
```
每次使用，在项目根目录(一般为mini_program)开启终端(命令行),执行以下命令
快捷方式：windows下按住shift + 鼠标右键，选择在此处打开powershell窗口
```
    npm start(实时编译代码)
```
所有源代码都必须是在src文件下写，gulp会编译覆盖dist的内容，且无法恢复！！！
在微信开发者工具打开项目根目录,在src文件夹下做任何文件的改变都将使gulp重新编译重新生成dist文件夹，在微信开发者工具能实时刷新
## 怎么使用weui-wxss
首先，我们需要把我们将要用到的资源在src/resource.json文件中声明，gulp会帮我们把所需资源复制到src文件下

### 举个栗子
当我们需要用到weui.wxss和weui-button.wxss文件时，在src/resource.json配置如下
```
    {
        "weui":['weui', 'button']
    }
```
这样src/style文件夹和dist/style文件夹下都会有这两个文件，我们只需要按照这些相对路径@import即可
## 有什么优点
* 编程性配置项目
* 能使用最新的js语法(需要配置.babelrc)
* 能自动生成兼容性更好的wxss代码(默认最低兼容安卓4.1,ios8)
* 能对各种文件进行压缩(包括json/wxml/wxss/js)
* 源代码支持拓展名为.html或.css
* 能引用npm下载的资源，最小化生成dist文件夹，不需要手动复制或过多复制(体现在weui-wxss资源能按需生成,需要在src/resource.json中指定)
* 近距离接触前端自动化工具gulp
