### 项目启动
`npm start`

### miaomiaoserver笔记

技术：nodejs+express+mongodb

安装node,express,mongodb

通过[express生成器](https://www.expressjs.com.cn/starter/generator.html)生成后台框架模板

`npm i -g express-generator`全局安装express生成器

`express --view=pug 项目名称`生成项目目录

`cd 项目目录`

`npm i`安装所需依赖

`npm start`启动项目



### MVC接口开发模式

#### MVC

- Controller
- model
- view



#### 邮件发送

nodemailer模块

- 开启Smtp:Simple Message Transfer Protocol 简单邮件传输协议

- [官网](https://nodemailer.com/about)

- 授权码：

- 基本配置config.js

```

  var Email = {

    config: {

      host: 'smtp.qq.com',

      port: 587,

      auth: {

        user: 'XXX@qq.com', // generated ethereal user发件邮箱

        pass: 'xxxxxxxxxxxxxxxx', // generated ethereal password邮箱smtp密钥授权码

     },

    },

    get transporter() {

       return nodemailer.createTransport(this.config);

    },

    get verify(){

     // 随机四位验证码，用于发送

       return Math.random().toString().substring(2,6);

    }

  }
```

 数据持久化与用户注册

通过服务端设置session

在客户端保存cookie并发送到服务端进行session的验证

session保存后可以配合redis进行持久化保存



#### 登录态的保持

- 现在流行token验证：后端生成加密串，传给客户端，客户端储存local Storage，传给后端，后端解密验证（公钥和私钥的匹配）

- session存在内存中，随着代码更改或者重启可能导致session的丢失，从而不能保证登录态的保持



### 登录过程

- 所需页面
  - 登录页
  - 注册页
  - 找回密码页
  - 个人中心页

