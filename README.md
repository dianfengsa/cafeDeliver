开饭吧配送端
====


##项目介绍
开饭吧配送端

master主分支为上线版本
backup分支带有旧App文件
develop为开发分支
##问题FAQ
Q：登陆页面没有注册选项。

A：通过手机号+短信或语音验证码的形式登陆，如果是未登陆过的用户则会自动注册，但是需要联系管理员分配区域才能获取订单数据。


Q：手机登录选择发送验证码问题，为什么我手机接收不到验证码？

A：每个手机号码每天都有一定的短信限制，大概是在十条左右，如果到达上限，建议过段时间再试试或者换手机号测试。


Q：登陆号码是否一定要手机本号码。

A：不用，可以登录别的手机号。


Q：IOS日志没有输出。

A：将启动配置文件config.xml 里的<preference name="debug" value="false"/>改为true后，可以在实机上显示错误日志。


Q：编译自定义Loader失败（打包中、失败等提示）。

A：1.可能是正在开发控制台在线打包 2.玄学问题，重新打开APICloud Studio。


....（待加入）


##更新时间
——————



##使用依赖

（新）页面为准

使用基于flexbox的栅格化布局，只支持包括androind4.4以上的系统，请阅读相关wiki：

http://coffcer.github.io/flex-layout/

iscroll——5.1.3

jQuery

模板引擎使用doT.min.js

基于apiCloud平台，有部分apiCloud的模块与功能



##开发平台
基于apiCloud平台。

在官网根据自己的习惯下载相应的开发工具或者扩展插件

http://www.apicloud.com/devtools

测试时推荐使用APICloud Studio - Eclipse Plugins进行本地打包（编译自定义Loader）后再进行真机同步。



## 下载、安装和测试
//  克隆项目 或者直接下载zip解压

git clone https://github.com/dianfengsa/cafeDeliver.git

//  编辑器下载扩展插件后按照相关文档安装

http://www.apicloud.com/devtools

//  安装完成后使用拓展插件里的USB真机同步进行测试

IOS平台需要PC上使用iTools或者iTunes

Androind平台部分机型需要安装豌豆荚或者其他安卓平台软件

如果真机同步后改动没有生效，请将App卸载后再同步一遍。


##项目的目录结构说明如下：

```
├── cafeDeliver                    //根目录
│   ├── widget                        //app文件目录
│         ├── css                         //css样式文件目录
│         ├── error
│         ├── html                           //（旧）app页面的html文件
│         ├── icon
│         ├── image                             //app图片文件
│         ├── launch
│         ├── newAppHtml                        //（新）app页面的html文件
│
│              ├── footer.html                      //底部导航栏（每个页面共用）
│              ├── deliveSelect.html                //立即派单和重新派单按钮时选择配送员的页面
│              ├── orderDelive.html                 //外卖订单页面（登陆后跳转的页面）
│              ├── orderDeliveInfo.html             //配送员信息页面（我的信息，退出功能）
│              ├── orderRequest.html                //配送请求页面
│              ├── orderSearch.html                 //配送订单搜索页面（暂无）
│              ├── orderDine.html                   //堂食订单（暂无）
│
│         ├── newAppJs                          //（新）app页面的js文件
│
│              ├── api.js                           //apiCloud必须文件
│              ├── av.js
│              ├── common.js
│              ├── date.format.js
│              ├── dbSearch.js
│              ├── doT.min.js
│              ├── iscroll.js                       //iscroll 用于订单页面的#m-content元素
│              ├── jquery.min.js
│              ├── model.js                         //handlebars模板引擎（放置，目前使用doT模板）
│              ├── orderDelive.js                   //几个订单页面的脚本文件
│              ├── orderDeliveInfo.js               //配送员信息页面的脚本文件
│              ├── share.js                         //底部导航栏的脚本文件
│              ├── touch.js
│              ├── underscore-min.js
│              ├── wilddog.js
│              ├── zepto.js
│
│         ├── res
│         ├── script                            //（旧）app页面的js文件
│         ├── config.xml                        //apiCloud启动配置
│         ├── index.html                        //App启动页面
│         └── new_login.xml                     //登陆页
```
##提交代码
确保修改后的代码基本测试完成后直接提交。