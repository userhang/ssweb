/**
 * Created by Administrator on 14-6-16.
 */
/**
 * Created by Administrator on 14-6-12.
 */

var Version = require('./../models/models_version.js');

exports.checkMyHistoryVersionReachToLimit = function(req,res){
	console.log("checkMyHistoryVersionReachToLimit req.body:",req.body);
	Version.find({username:req.body.username},function(err,version){
		if(err){
			console.log("checkMyHistoryVersionReachToLimit 出错");
			res.send({'success':false,'err':err});
		}else{
			if(version[0].historyVersion.length>=req.body.limit){
				console.log("已达到本用户存储上限："+req.body.limit+"个版本");
				res.send({'success':false,'err':"limit",'errInfo':"已达到本用户存储上限："+req.body.limit+"个版本。"});
			}else{
				console.log("未达到本用户存储上限："+req.body.limit+"个版本，可以保存");
				exports.saveThisVersion(req, res);
			}
		}
	})
}

exports.saveThisVersion = function(req,res){
	var readyToStoreVersion={
//		版本号
		version:req.body.version,
//		更新时间
		time : { type: Date, default: Date.now },
//		描述
		describe:req.body.describe,
//		备注
		comments:req.body.comments,
//		项目
		project:{
			bodycode:req.body.bodycode,
			bindEventList:req.body.tmpbindEventList,
			defaultjslist:req.body.tmpdefaultjslist,
			aLabelHrefList:req.body.tmpaLabelHrefList
		}
	};
	Version.findOneAndAdd({username:req.body.username},
	                   {historyVersion:readyToStoreVersion},
	                   function(err){
		                   if(err) {
			                   console.log("进入了saveThisVersion.findOneAndAdd 出错");
			                   res.send({'success':false,'err':err});
		                   } else {
			                   console.log("进入了saveThisVersion.findOneAndAdd 正常");
			                   res.send({'success':true});
		                   }
	                   });
};

exports.checkMyHistoryVersion=function(req,res){
	Version.find({username:req.body.username},function(err,version){
		if(err) {
			console.log("进入了checkMyHistoryVersion find出错");
			res.send({'success':false,'err':err});
		} else {
			console.log("进入了checkMyHistoryVersion find正常  version",version);
			if(version == null){
				res.send({'success':false,'err':err});
			}else{
				res.send({'success':true,'historyVersion':version[0].historyVersion});
			}
		}
	});
}

exports.historyVersionCover=function(req,res){
	console.log("historyVersionCover req.body",req.body);
	Version.findOneAndCover({'username':req.body.username,'historyVersion._id':req.body.thisHistoryVersionId},
	                     {'historyVersion.$':req.body.updatedHistoryVersion},
	                     function(err){
		                     if(err) {
			                     console.log("进入了historyVersionCover.findOneAndCover 出错");
			                     res.send({'success':false,'err':err});
		                     } else {
			                     console.log("进入了historyVersionCover.findOneAndCover 正常");
			                     res.send({'success':true});
		                     }
	                     });
}

exports.historyVersionDel=function(req,res){
	console.log("historyVersionCover req.body",req.body);
	Version.findOneAndRemove({'username':req.body.username},
	                      {'historyVersion':{'_id':req.body.thisHistoryVersionId}},
	                      function(err){
		                      if(err) {
			                      console.log("historyVersionDel.remove 出错");
			                      res.send({'success':false,'err':err});
		                      } else {
			                      console.log("historyVersionDel.remove 正常");
			                      res.send({'success':true});
		                      }
	                      });
}



