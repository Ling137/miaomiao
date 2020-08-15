//Mongodb数据库基本配置
var mongoose = require('mongoose')
var nodemailer = require('nodemailer')

var Mongoose = {
	url: 'mongodb://localhost:27017/miaomiao',
	connect() {
		mongoose.connect(
			this.url,
			{ useNewUrlParser: true, useUnifiedTopology: true },
			(err) => {
				if (err) {
					console.log('数据库连接失败')
					return
				}
				console.log('数据库连接成功')
			}
		)
	},
}

var Email = {
	config: {
		host: 'smtp.qq.com',
		port: 587,
		auth: {
			user: '', // generated ethereal user发件邮箱
			pass: '', // generated ethereal password邮箱smtp密钥
		},
	},
	get transporter() {
		return nodemailer.createTransport(this.config);
    },
    get verify(){
        // 随机四位验证码
        return Math.random().toString().substring(2,6);
    }
}
module.exports = {
	Mongoose,Email
}
