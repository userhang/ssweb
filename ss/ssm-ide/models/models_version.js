/**
 * Created by Administrator on 14-6-16.
 */

/**
 * Created by Administrator on 14-6-12.
 */

var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var VersionSchema = new Schema({
	                            username:{ type:String, index: true } ,
	                            historyVersion:
		                            [
			                            {
//			                                         版本号
				                            version:String,
//			                                         更新时间
				                            time : { type: Date, default: Date.now },
//			                                         描述
				                            describe:String,
//			                                         备注
				                            comments:String,
//			                                         项目
				                            project:{
					                            bodycode:String,
					                            bindEventList:Array,
					                            defaultjslist:Array,
					                            aLabelHrefList:Array
				                            }
			                            }
		                            ]
                            });
var Version = mongodb.mongoose.model("Version", VersionSchema);
//原型对象
var VersionDAO = function(){};
//为原型对象添加的方法
VersionDAO.prototype.save = function(obj, callback) {
	var instance = new Version(obj);
	instance.save(function(err){
		callback(err);
	});
};

VersionDAO.prototype.findOneAndAdd = function(conditions,update,callback) {
	Version.findOneAndUpdate(conditions, {$push:update}, function(err){
		callback(err);
	});
};

VersionDAO.prototype.findOneAndCover = function(condition,update,callback) {
	Version.findOneAndUpdate(condition, {$set:update}, function(err){
		callback(err);
	});
};

VersionDAO.prototype.findOneAndRemove = function(condition,update,callback) {
	Version.findOneAndUpdate(condition,{$pull:update}, function(err){
		callback(err);
	});
};

VersionDAO.prototype.find = function(conditions,callback) {
	Version.find(conditions,function(err,obj){
		callback(err,obj);
	})
};


module.exports = new VersionDAO();
