/**
 * Created by Administrator on 14-6-12.
 */

var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var UserSchema = new Schema({
	                            username:{ type:String, index: true } ,
	                            password:String,
	                            limit:{type:Number,default:3},
	                            admin:{type:Boolean,default:false},
	                            register_time : { type: Date, default: Date.now },
	                            register_confirm : {type:Boolean,default:true}
                            });
var User = mongodb.mongoose.model("User", UserSchema);


/*
prototype的作用是为一个对象添加属性或者方法
*/
//原型对象
var UserDAO = function(){};

//为原型对象添加一个保存的方法
UserDAO.prototype.save = function(obj, callback) {
	var instance = new User(obj);
    //存储，看是否成功，然后调用callback函数，将存储的结果传入
	instance.save(function(err){
		callback(err);
	});
};

//为原型对象添加一个查找用户名和密码的方法
UserDAO.prototype.findByUserNameAndPassword = function(user, callback) {
	User.findOne({username:user.username,password:user.password}, function(err, obj){
		callback(err, obj);
	});
};

//为原型对象添加一个查找并添加的方法
UserDAO.prototype.findOneAndAdd = function(conditions,update,callback) {
	User.findOneAndUpdate(conditions, {$push:update}, function(err){
		callback(err);
	});
};

//为原型对象添加一个查找并覆盖的方法
UserDAO.prototype.findOneAndCover = function(condition,update,callback) {
	User.findOneAndUpdate(condition, {$set:update}, function(err){
		callback(err);
	});
};

//为原型对象添加一个查找并删除的方法
UserDAO.prototype.findOneAndRemove = function(condition,update,callback) {
	User.findOneAndUpdate(condition,{$pull:update}, function(err){
		callback(err);
	});
};

//为原型对象添加一个查找的方法
UserDAO.prototype.find = function(conditions,callback) {
	User.find(conditions,function(err,user){
		callback(err,user);
	})
};

//为原型对象添加一个查找并删除的方法
UserDAO.prototype.findOneAndRemove = function(conditions,callback) {
	User.findOneAndRemove(conditions,function(err,user){
		callback(err,user);
	})
};


//将添加完方法的对象暴露出去
module.exports = new UserDAO();
