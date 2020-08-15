var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

var UserSchema = new mongoose.Schema({
	username: { type: String, required: true, index: { unique: true } }, //类型：字符串，必填字段，唯一
	password: { type: String, required: true },
	email: { type: String, required: true, index: { unique: true } },
	date: { type: Date, default: Date.now() },
})

var UserModel = mongoose.model('user', UserSchema)
UserModel.createIndexes() //使index唯一性生效

var save = (data) => {
	var user = new UserModel(data)
	return user
		.save()
		.then(() => {
			return true
		})
		.catch(() => {
			return false
		})
}
// 查询login内容用于判断
var findLogin = (data) => {
	return UserModel.findOne(data);
}

//修改密码
var updatePassword =(email,password)=> {
    return UserModel.update({email},{$set:{password}})
    .then(()=>{
        return true;
    })
    .catch(()=>{
        return false;
    })
}
module.exports = {
    save,
    findLogin,
    updatePassword
}
