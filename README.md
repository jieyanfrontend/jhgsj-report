# 江海工商局小程序项目
## 怎么获取
```$xslt
    git clone gituser@119.29.206.183:/var/git_warehouse/mini_program.git
```
## 怎么使用
在项目根目录下运行以下命令(请确保已经安装了node.js)
```$xslt
    npm i (安装项目依赖)
    npm start(开始编译项目)
```
在微信开发者工具打开项目的dist文件夹(注意是dist文件夹),在src文件夹下做任何文件的改变都将使gulp重新编译重新生成dist文件夹，在微信开发者工具能实时刷新
## 有什么优点
* 编程性配置项目
* 能使用最新的js语法(需要配置.babelrc)
* 能自动生成兼容性更好的wxss代码
* 能对各种文件进行压缩(包括json/wxml/wxss/js)
* 能引用npm下载的资源，最小化生成dist文件夹，不需要手动复制或过多复制(体现在weui-wxss资源能按需生成,需要在src/resource.json中指定)
* 近距离接触前端自动化工具gulp
