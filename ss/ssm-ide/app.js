//加载模块
var express = require('express')
    //本地模块
	, user = require('./routes/routes_user')
	, version = require('./routes/routes_version')
    , path = require('path')
    , ejs = require('ejs')
	, http = require('http')
	, fs = require('fs')
	,archiver = require('archiver')
	, SessionStore = require("session-mongoose")(express);

var store = new SessionStore({
	                             url: "mongodb://localhost/session",
	                             interval: 120000 // expiration check worker run interval in millisec (default: 60000)
                             });
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('.html', ejs.__express);
app.set('view engine', 'html'); //修改文件扩展名ejs为html
app.use(express.favicon());
app.use(express.logger('dev'));
//因为涉及到文件上传，这里把文件上传最大设为了5M
//app.use(express.bodyParser({limit : "5000kb"}));
//app.use(express.json({limit: '5000kb'}));
app.use(express.bodyParser({ uploadDir: "app/ires/img" }));
//app.use(express.bodyParser({limit: '50mb'}));
//app.use(express.json({limit: '50mb'}));
//app.use(express.urlencoded({limit: '50mb'}));

app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.cookieSession({secret : 'ssm-ide'}));
app.use(express.session({
	                        secret: "ssm-ide",
	                        store: store,
	                        cookie: { maxAge: 900000 } // expire session in 15 min or 900 seconds
                        }));
app.use(function(req, res, next){
	res.locals.user = req.session.user;
	next();
});

app.use(app.router);
app.use(express.static(path.join(__dirname, 'app')));

if (app.get('env') === 'development') {
    app.use(express.errorHandler());
}

// angular启动页
app.get('/', function (req, res) {
    res.sendfile('app/index.html');
});

//用户管理界面
app.get('/admin', function(req, res){
    res.sendfile('app/admin.html');
});

app.get('/view', function(req, res){
    res.sendfile('app/ires/view.html');
})







var upload = require('./routes/upload');



app.post('/changepagex',user.changepage);

app.post('/register', user.doUserAdd);

app.post('/upload', user.upload);

app.post('/chooseimg', user.chooseimg);

app.post('/login', user.doLogin);

app.post('/checkLog', user.checkLog);

app.post('/storeintosession', user.storeintosession);

app.post('/logout', user.doLogOut);

app.post('/saveThisVersion',version.checkMyHistoryVersionReachToLimit);

app.post('/checkMyHistoryVersion',version.checkMyHistoryVersion);

app.post('/historyVersionCover',version.historyVersionCover);

app.post('/historyVersionDel',version.historyVersionDel);

app.post('/getAllUserInfo',user.getAllUserInfo);

app.post('/changeOneUserInfo',user.changeOneUserInfo);

app.post('/delOneUser',user.delOneUser);

app.post('/changeCurrentUserPassword',user.changeOneUserPassword);

//全屏预览界面
app.post('/view', function(req, res){
    var newbodycode=req.body.bodycode,
        bindfunc=req.body.bindfunc,
        defaultjs=req.body.defaultjs,
        bindfuncreg=/\r/g,
    //创建一最终打包文件的输出流
        output = fs.createWriteStream('app/res.zip'),
    //生成archiver对象，打包类型为zip
        archive = archiver('zip'),
        scriptreg=/<script\s\S*/g;
        var srcreg = /src="./g;
        var srcreg1 = /src='./g

    //在这里对图片的src进行修改
    newbodycode = newbodycode.replace(srcreg, 'src="ires');
    newbodycode = newbodycode.replace(srcreg1, 'src=\'ires');

    bindfunc="var ssM = $.ssm();$(function (){"+defaultjs+bindfunc.replace(bindfuncreg, '')+"});";
    newbodycode="<body>"+newbodycode.replace(scriptreg, '')+'<script src="ires/index.js" type="text/javascript" charset="utf-8"></script>'+"</body>";



    fs.writeFile('app/ires/index.js', bindfunc, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log('【1】writing done to index.js');

    });
    //读取完js文件之后再读取html文件，（强制单线程）
    fs.readFile('app/ires/view.html', 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        var linkreg = /<link\shref=.*/,
            bodyreg = /<body>[\S\s]*?<\/body>/,
            tmphtmlcontent = data.replace(linkreg, ''),
            htmlcontent = tmphtmlcontent.replace(bodyreg, newbodycode);

        //将res.html内容写入index.html文件
        fs.writeFile('app/ires/view.html', htmlcontent, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log('【2】writing done to view.html');
            console.log('【3】writeFile finish' + Date().toLocaleString());
        });
        res.sendfile('app/ires/view.html');
    });




});

app.post('/compress', function(req,res){
    console.log('=============================================')
	var newbodycode=req.body.bodycode,
		bindfunc=req.body.bindfunc,
		defaultjs=req.body.defaultjs,
		bindfuncreg=/\r/g,
        //创建一最终打包文件的输出流
		output = fs.createWriteStream('app/res.zip'),
        //生成archiver对象，打包类型为zip
		archive = archiver('zip'),
		scriptreg=/<script\s\S*/g;
    console.log(newbodycode);
	bindfunc="var ssM = $.ssm();$(function (){"+defaultjs+bindfunc.replace(bindfuncreg, '')+"});";
	newbodycode="<body>"+newbodycode.replace(scriptreg, '')+'<script src="index.js" type="text/javascript" charset="utf-8"></script>'+"</body>";


	fs.writeFile('app/ires/index.js', bindfunc, function(err) {
		if(err) {
			return console.log(err);
		}
		console.log('【1】writing done to index.js');

	});
    //读取完js文件之后再读取html文件，（强制单线程）
    fs.readFile('app/ires/res.html', 'utf8', function(err, data) {
        if(err) {
            return console.log(err);
        }
        var linkreg=/<link\shref=.*/,
            bodyreg=/<body>[\S\s]*?<\/body>/,
            tmphtmlcontent=data.replace(linkreg, ''),
            htmlcontent=tmphtmlcontent.replace(bodyreg,newbodycode);

        //将res.html内容写入index.html文件
        fs.writeFile('app/ires/index.html', htmlcontent, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log('【2】writing done to index.html');
            console.log('【3】writeFile finish' + Date().toLocaleString());
        });
        //监听是否写入完成
        output.on('close', function () {
            console.log(archive.pointer() + ' total bytes【4】');
            res.write("success");
            console.log('【5】archiver has been finalized and the output file descriptor has closed.');
            res.end();
        });

        //将打包对象与输出流关联
        archive.pipe(output);
        console.log('【6】将archiver与output关联完成');
        //这里的bulk中的src应该是筛选的功能
        //这里筛选出当前用户的文件夹，只下载该文件夹和系统提供的文件的内容（别的用户的文件夹不许下载）
        var srcUsername = 'img/'+req.body.username + '/**';
        archive.bulk([
            { expand: true, cwd: 'app/ires', src: ['*.js','*.css','index.html',srcUsername,'img/system/**','deps/**']}
        ]);
        console.log("【7】bulk完成");
        //打包
        archive.finalize();
        console.log('【8】finalize finish');
        //到这里就结束了
        console.log('【9】output finish');
        archive.on('error', function(err){
            throw err;
        })
    })


});

app.post('/acesave',function(req,res){

    console.log('xmlDoc:',req.body.acejs);
    res.send("ok，请返回主页面进行适配。");
    fs.writeFile('app/ace.js', req.body.acejs, function (err) {
        if (err) {
            return console.log(err);
        }
    })
});

app.post('/initjs',function(req,res){

    console.log('xmlDoc:',req.body.acejs);
    res.send("ok");
    fs.writeFile('app/initjs.js', req.body.initjs, function (err) {
        if (err) {
            return console.log(err);
        }
    })
});

http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});