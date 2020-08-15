var { Email } = require('../utils/config.js')
var UserModel = require('../models/users.js')
var login = async (req, res, next) => {
    //post请求从body中获取数据，get请求从query中获取数据
    var {username,password} = req.body;
    var requestData = {username,password}
    console.log(requestData)

    //验证(一般前端可以做一个验证吗验证，防止csrf攻击)
    var result  = await UserModel.findLogin({
        username,
        password
    });
    if(result){
        //登录成功将username存储到session中
        req.session.username = username;
        res.send({
            msg:'登录成功',
            status:0
        })
    }else{
        res.send({
            msg:'登录失败',
            status:-1,
            failData:requestData
        })
    }


}
var register = async (req, res, next) => {
    var {username,password,email,verify} = req.body;

    if(email!==req.session.email||verify!==req.session.verify){
        res.send({
            msg:'验证码错误',
            status:-1
        })
    }

    var result = await UserModel.save({
        username,
        password,
        email
    })

    if(result){
        res.send({
            msg:'注册成功',
            status:0
        })
    }
    else{
        res.send({
            msg:'注册失败',
            status:-2
        })
    }
}
var verify = async (req, res, next) => {
	var email = req.query.email
	var verify = Email.verify
    req.session.verify = verify
    req.session.email = email;
	var mailOptions = {
		from: '<1375025651@qq.com>', // sender address
		to: email, // list of receivers
		subject: 'miaomiao 邮箱验证码', // Subject line标题
		text: '验证码:' + verify, // plain text body
		// html: '<b>Hello world?</b>', // html body
	}
	Email.transporter.sendMail(mailOptions, (err) => {
		// console.log(err)
		if (err) {
			res.send({
				msg: '验证码发送失败',
				code: -1,
				status: -1,
			})
		} else {
			res.send({
				msg: '验证码发送成功',
				code: 0,
				status: 0,
			})
		}
	})
}

var logout = async (req, res, next) => {
    req.session.username='';//将session的username置空，即为退出登录态
	res.send({
		msg: '退出登录成功',
		code: 0,
		status: 0,
	})
}
var getUser = async (req, res, next) => {
    if(req.session.username){
        res.send({
            msg:'获取用户信息成功',
            status:0,
            data:{
                username:req.session.username,
                userImg:'http://browser9.qhimg.com/bdm/384_237_0/t019e08ebfa47d7cc34.jpg'
            }
        })
    }else{
       res.send({
           msg:'获取用户信息失败',
           status:-1
       }) 
    }

}
var findPassword = async (req, res, next) => {
    var {email,password,verify} = req.body;
    
    if(email===req.session.email&&verify===req.session.verify){
        var result = await UserModel.updatePassword(email,password);
        if(result){
            res.send({
                msg:'修改密码成功',
                status:0,
            })
        }else{
            res.send({
                msg:'修改密码失败',
                status:-1,
            })
        }
        
    }else{
        res.send({
            msg:'验证码失败',
            status:-1,
        })
    }
}

module.exports = {
	login,
	register,
	logout,
	verify,
	getUser,
	findPassword,
}
