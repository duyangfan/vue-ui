### webpack4.0+简介
```

--save (-S)把模块安装到项目依赖中
--save-dev(-D) 安装到开发依赖中
package.json  类似pom

webpack本地安装：
1.项目初始化:npm init -y
2.安装：npm install webpack@4.41.2 webpack-cli -D
3.配置:package.json文件   
4.运行: npm run build

打包
 npx webpack   会生成一个dis目录生成main.js
 npx 可以在本地查找该模块    如果有直接执行   没有该模块自动下载模块  下载完毕后完成命令执行

```
###手动配置webpack
```$xslt
在项目目录下创建webpack.config.js文件 ，作为配置文件 
/*
webpack配置文件
common.js规范
一个文件作为一个模块  模块内部有自己的独立的作用域
默认情况下 模块与模块之间互相独立
module.exports   /exports 导出
require()导出模块

配置完毕后导出
*/

//借助一个node.js自带的path模块
let path = require("path");
module.exports={
    //模式   production生产压缩    development  不压缩
    mode:"development",
    //配置入口
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.join(__dirname,'build')              //必须是绝对路径
    },
    //配置webpack-dev-server 在内存进行打包
    devServer:{
        //启动目录
        contentBase:path.join(__dirname,'build'),
        //自动打卡浏览器
        open:true,
        //显示打包进度条
        progress:true,
        //配置端口
        port:80,
    }
}





```
####使用
```$xslt
   一、 module.exports={
        info:"base.js info obj",
        person:{
            name:"dudu",
            age:25
        },
        setName:function(person,name){
            person.name=name;
        }
    }
 eg:let {info,setName,person}=require("./per_info.js");
 console.log(info)
 setName(person,"yg")
 console.log(person.name)
 解构{}
 
 二、exports是module.exports的引用
 
 
 3、package.json文件添加执行脚本  使用 npm run build
 "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
     "build":"npx webpack"
   }
  "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "start":"npx webpack"
     } 
 npm start
 
 4、本都服务器启动
 npm remove webpack-dev-server
 npm install webpack-dev-server@2.9.1 -D
 
 
 
 
 
```

###安装vue
```$xslt
1.vue-cli 2
npm install -g vue-cli

初始化
vue init  模板  项目名
vue init webpack vue_project



```