/**
 * Created by Administrator on 14-6-12.
 */
//User为数据库操作模块的一个对象
var User = require('./../models/models_user.js');
var Version = require('./../models/models_version.js');


/*
exports.* = function(){}导出模块
*/

//检查用户登录
//如果用户为空则登录失败，否则成功
exports.checkLog = function(req,res){
	console.log("checkLog  req.session :",req.session);
	if(req.session.user==null||req.session.user==undefined){
		res.send({'success':false});
	}else{
		console.log("req.session :",req.session);
		res.send({'success':true,'user':req.session.user});
	}
}

//把req.body中的数据存到sesssion中
exports.storeintosession = function(req,res){
	req.session.user = req.body;
	console.log("storeintosession 正常  req.session",req.session);
	res.send({'success':true});
}

//注销操作。清空session中的数据
exports.doLogOut = function(req,res){
	console.log("doLogOut 之前  req.session",req.session);
	req.session.user = null;
	console.log("doLogOut 之后  req.session",req.session);
	res.send({'success':true});
};

//注册操作
exports.doUserAdd = function(req, res) {
	var newUser=req.body;
    console.log('执行了doUserAdd方法');
	User.save(newUser,function(err){
		if(err) {
            //存储失败
			console.log("进入了doUserAdd的User.save 出错");
			res.send({'success':false,'err':err});
		} else {
            //存储成功
			console.log("进入了doUserAdd的User.save 正常");
            //调用doUserVersionInit函数
			exports.doUserVersionInit(req, res);
		}
	});
};

//初始化用户、版本号
exports.doUserVersionInit=function(req,res){
	var newUserVersion={
		username:req.body.username
	}
    //保存当前用户和对应的版本号
	Version.save(newUserVersion,function(err){
		if(err) {
			console.log("进入了doUserVersionInit的Version.save 出错");
			res.send({'success':false,'err':err});
		} else {
			console.log("进入了doUserVersionInit的Version.save 正常");
			res.send({'success':true});
		}
	})
}

//更换页面
exports.changepage = function(req, res) {
    console.log('更换到index2.html页面'+req.num);
    res.sendfile('app/index2.html');
}

//登陆
exports.doLogin = function(req, res) {
	var user={
		username:req.body.username,
		password:req.body.password
	};
    //交给findByUserNameAndPassword去查找是否有与之匹配的用户
	User.findByUserNameAndPassword(user,function(err, user){
        //exports.checkAdmin(req, res);
		if(err) {
			console.log("进入了doLogin 出错");
			res.send({'success':false,'err':err});
		} else {

			console.log("进入了doLogin 正常");
			if(user == null){
				console.log("无此用户");
				res.send({'success':false,'err':err});
			}else if(user.register_confirm){

                var goalDirPath=process.cwd();
                goalDirPath = goalDirPath + '\\app\\ires\\img\\' + user.username;
                var fs = require('fs');

                deleteFolderRecursive(goalDirPath);
                function deleteFolderRecursive (path) {
                    var files = [];
                    if (fs.existsSync(path)) {
                        files = fs.readdirSync(path);
                        files.forEach(function (file, index) {
                            var curPath = path + "/" + file;
                            if (fs.statSync(curPath).isDirectory()) { // recurse
                                deleteFolderRecursive(curPath);
                            } else { // delete file
                                console.log('删除的文件名为：' + curPath);
                                fs.unlinkSync(curPath);
                            }
                        });

                        fs.rmdirSync(path);

                    }
                }


                console.log("登陆dologin成功");
                res.send({'success': true, 'user': user});


			}else{
				console.log("登陆dologin失败");
				res.send({'success':false,'err':"noconfirm"});
			}
		}
	});
}

//检查是否为管理员
exports.checkAdmin=function(req,res){
    console.log('检查是否为管理员');
	User.find({username:req.body.username},function(err,user){
		if(err) {
			console.log("进入了checkAdmin find出错");
			res.send({'success':false,'err':err});
		} else {
			console.log("进入了checkAdmin find正常  user",user);
			if(user == null){
				res.send({'success':false,'err':err});
			}else if(!user[0].admin){
				res.send({'success':false,'err':"notadmin"});
			}else{
				res.send({'success':true});
//				exports.getAllUserInfo(req, res);
			}
		}
	});
}

//获取所有用户的信息
exports.getAllUserInfo=function(req,res){
	User.find(function(err,user){
		if(err) {
			console.log("进入了getAllUserInfo find出错");
			res.send({'success':false,'err':err});
		} else {
			console.log("进入了getAllUserInfo find正常  user",user);
			if(user == null){
				res.send({'success':false,'err':"havenouser"});
			}else{
				res.send({'success':true,'allUser':user});
			}
		}
	});
}

//修改一个用户的信息
exports.changeOneUserInfo=function(req,res){
	User.findOneAndCover({username:req.body.username},
	                     {password:req.body.password,
		                     limit:req.body.limit,
		                     admin:req.body.admin,
		                     register_confirm:req.body.register_confirm},
	                     function(err){
								if(err) {
									console.log("进入了changeOneUserInfo findOneAndCover出错");
									res.send({'success':false,'err':err});
								} else {
									console.log("进入了changeOneUserInfo findOneAndCover正常");
									res.send({'success':true});
								}
						});
}

//修改一个用户的密码
exports.changeOneUserPassword=function(req,res){
	User.findOneAndCover({username:req.body.username},
	                     {password:req.body.password},
	                     function(err){
								if(err) {
									console.log("changeOneUserPassword findOneAndCover出错");
									res.send({'success':false,'err':err});
								} else {
									console.log("changeOneUserPassword findOneAndCover正常");
									res.send({'success':true});
								}
						});
}

//删除一个用户
exports.delOneUser=function(req,res){
	User.findOneAndRemove({username:req.body.username},function(err){
								if(err) {
									console.log("进入了delOneUser findOneAndRemove出错");
									res.send({'success':false,'err':err});
								} else {
									console.log("进入了delOneUser findOneAndRemove正常");
									res.send({'success':true});
								}
						});
}

//更新目录
//只能上传jpg文件
exports.upload = function (req, res) {
    console.log("执行upload方法")
    var fs = require('fs');
    //var processor = require('processor');
    //var goalDirPath = 'D:\\ssm-ide\\app\\ires\\img\\' + req.body.username;
    //获取到ssm-ide
    var goalDirPath=process.cwd();
    goalDirPath = goalDirPath + '\\app\\ires\\img\\' + req.body.username;
    //js=js[js.length-1].src.substring(0,js[js.length-1].src.lastIndexOf("/")+1);
    console.log("goalPath路径：" + goalDirPath);
    //alert(js);
    console.log(goalDirPath);
    if (fs.existsSync(goalDirPath)) {
        console.log('已经创建过此更新目录了');
        } else {
        fs.mkdirSync(goalDirPath);
        console.log('更新目录已创建成功\n');
    }
    var mydate = new Date();
    var mytime = mydate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)

    console.log('控制台输出：req.body.form:'+req.body.imgFile.name+' '+mytime);
    console.log('控制台输出：req.body.imgFile.size:'+req.body.imgFile.size);
//    console.log('控制台输出:req.body.imFile[0]:' + req.body.imgFile[0]);
//    console.log('控制台输出:req.body.imFile[1]:' + req.body.imgFile[1]);
//    console.log('控制台输出:req.body.imFile[2]:' + req.body.imgFile[2]);
//    console.log('控制台输出:req.body.imFile[3]:' + req.body.imgFile[3]);
//    console.log('控制台输出:req.body.imFile[4]:' + req.body.imgFile[4]);
//    console.log('控制台输出:req.body.imFile[5]:' + req.body.imgFile[5]);
//    console.log('控制台输出:req.body.imFile[6]:' + req.body.imgFile[6]);
//    console.log('控制台输出:req.body.imFile[7]:' + req.body.imgFile[7]);
//    console.log('控制台输出:req.body.imFile[8]:' + req.body.imgFile[8]);
//    console.log('控制台输出:req.body.imFile[9]:' + req.body.imgFile[9]);
//    console.log('控制台输出:req.body.imFile[10]:' + req.body.imgFile[10]);
//    console.log('控制台输出:req.body.imFile[11]:' + req.body.imgFile[11]);
//    console.log('控制台输出:req.body.imFile[12]:' + req.body.imgFile[12]);
//    console.log('控制台输出:req.body.imFile[13]:' + req.body.imgFile[13]);
//    console.log('控制台输出:req.body.imFile[14]:' + req.body.imgFile[14]);
//    console.log('控制台输出:req.body.imFile[15]:' + req.body.imgFile[15]);
//    console.log('控制台输出:req.body.imFile[16]:' + req.body.imgFile[16]);
//    console.log('控制台输出:req.body.imFile[17]:' + req.body.imgFile[17]);
//    console.log('控制台输出:req.body.imFile[18]:' + req.body.imgFile[18]);
//    console.log('控制台输出:req.body.imFile[19]:' + req.body.imgFile[19]);

    var imgTypeForTest = "";
    for(var i = 11; i < 15; i++){
        imgTypeForTest += req.body.imgFile[i];
    }
    console.log('控制台输出：imgTypeForTest:' + imgTypeForTest);
    var jpg = /jpeg/;
    var png = /png/;
    var gif = /gif/;
    var bmp = /bmp/;
    var imgBase = "data:image\/";
    var imgType;
    //判断文件是哪种文件
    if(jpg.test(imgTypeForTest)){
        //是jpg文件
        console.log("控制台输出：文件类型为jpg文件");
        imgBase = imgBase + "jpeg" + ";base64";
        imgType = 'jpg';
    }
    else if(png.test(imgTypeForTest)){
        //是png图片
        console.log("控制台输出：文件类型为png文件");
        imgBase = imgBase + "png" + ";base64";
        imgType = 'png';
    }
    else if(gif.test(imgTypeForTest)){
        //是gif图片
        console.log("控制台输出：文件类型为gif文件");
        imgBase = imgBase + "gif" + ";base64";
        imgType = "gif";
    }
    else if(bmp.test(imgTypeForTest)){
        //是bmp图片
        console.log("控制台输出：文件类型为bmp文件");
        imgBase = imgBase + "bmp" + ";base64";
        imgType = 'bmp';
    }
    else{
        //错误处理
    }

    console.log("控制台输出：imgBase:" + imgBase);
    console.log("控制台输出：imgType:" + imgType);
    //console.log("文件默认属性："+req.body.imgFile.size);
    //转成base64编码的字符串
    var base64Data = req.body.imgFile.replace(imgBase,"");
    console.log("typeof(base64Data) : " + typeof(base64Data));

    //将转成base64的字符串写入一个.jpg文件中
    fs.writeFile(goalDirPath+'\\'+mytime+ '.' + imgType, base64Data,'base64', function (err) {
        if (err) {
            throw err;
        }
        //console.log(err);
        console.log('It\'s saved!');
    });
    res.send({'success':true,'file':'./img/' + req.body.username + '/' + mytime + '.' + imgType,'test':1});
}

exports.chooseimg = function (req,res){
    console.log("执行了chooseimg");
    var username = req.body.username;
    //var goalDirPath = 'D:\\ssm-ide\\app\\ires\\img\\' + username;
    var goalDirPath=process.cwd();
    goalDirPath = goalDirPath + '\\app\\ires\\img\\' + username;
    var fs = require('fs');
    //fs.existsSync是检查某个路径是否存在，如果存在，则执行if中的语句
    if(fs.existsSync(goalDirPath)){
        var files = fs.readdirSync(goalDirPath);
        var myimgs = [];
        for(var i=0;i<files.length;i++){
            myimgs.push({'filename':files[i],'filepath':'./ires/img/'+username+'/'+files[i]});
        }
        //console.log("myings : " + myimgs);
        res.send({'success':true,'myimgs':myimgs});
    }else{
        res.send({'success':false});
    }
    res.send()
}

exports.testlink = function (req, res) {
//    var fs = require('fs');
//    console.log("文件默认属性："+req.files.upfile.size);
//    console.log("文件默认属性：OOOOOOOOk");
//    res.send({'success':true});
//
//    console.log('start');
////    var file=req.body;
//    var fs = require('fs');
//    console.log('req.body'+req.test);
////    console.log('req.body.form'+req.body.form);
////    console.log("文件默认属性："+req.files.upfile.size);
////    console.log(req);
////    if(req.files.upfile.size>100000){
////        console.log("文件默认属性："+req.files.upfile.size);
////        fs.unlink(req.files.upfile.path);
////    }
//    res.send({'success':true});
    var allpath='';
    var path = 'C:\\Users\\Administrator\\Desktop\\ssm-ide\\app\\ires\\img\\';
    console.log('read dir start');
    var fs = require('fs');

    var filenode=[];


    allpath = fs.readdirSync(path);
    allpath=allpath+'';
    var nodepath = allpath.split(",");
//    console.log(nodepath.length+nodepath[1]);
    var maxtime = fs.statSync('C:\\Users\\Administrator\\Desktop\\ssm-ide\\app\\ires\\img\\'+nodepath[0]).ctime;
    var targetpath = nodepath[0];
    for(var i=0;i<nodepath.length;i++){
        var testpath = 'C:\\Users\\Administrator\\Desktop\\ssm-ide\\app\\ires\\img\\'+nodepath[i];
        var stat = fs.statSync(testpath);
        if(stat.ctime>maxtime){
            maxtime = stat.ctime;
            targetpath = nodepath[i];
        }
    }
    targetpath = './img/'+targetpath;
    console.log('显示'+targetpath);
    res.send({'success':true,'file':targetpath,'test':1});
}




