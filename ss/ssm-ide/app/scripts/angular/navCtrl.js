/**
 * Created by Administrator on 14-5-17.
 */
var app = angular.module('app');
app.controller('navCtrl', ['$scope', '$location','$http','$window',function navCtrl($scope, $location,$http,$window) {
	messenger.listen(function (msg) {
		var msg = JSON.parse(msg);
		if(msg.type=='download'){
			$scope.$apply(function () {

				$scope.bindfunc=msg.bindfunc;
				$scope.defaultjs=msg.defaultjs;
				console.log("$scope.bindfunc   :",$scope.bindfunc);
				console.log("$scope.defaultjs   :",$scope.defaultjs);
			});
		}
		if(msg.type=='loged'){
			$scope.$apply(function () {
				$scope.user=msg.user;
				$scope.notlogin=false;
				if(msg.user.admin){
					$scope.manageUser=true;
				}
			});
		}
	});
	$scope.preview=function preview(){
		var stateData={
			'directive':'changePagestate',
			'pagestate':'preview'
		}
		sendMessage_funcdirective(stateData);
		$scope.preview_navActive=true;
		$scope.edit_navActive=false;
		$scope.download_navActive=false;
		$scope.save_navActive=false;
        $("#showCtrlHeightInput").val($('#mainIframe').height());
        $("#showCtrlWidthInput").val($("#mainIframe").width());
        $(".cbp-spmenu-push").css("overflow", "scroll");
        $("#showCtrlDiv").animate({"left":"0px"});
		uipane("off");
	}
	$scope.edit=function edit(){
		var stateData={
			'directive':'changePagestate',
			'pagestate':'edit'
		}
		sendMessage_funcdirective(stateData);
		$scope.edit_navActive=true;
		$scope.preview_navActive=false;
		$scope.download_navActive=false;
		$scope.save_navActive=false;
        $scope.showCtrlReset();
        $(".cbp-spmenu-push").css("overflow", "hidden");
        $("#showCtrlDiv").animate({"left":"-450px"});
		uipane("on");
	}
	$scope.saveData=function saveData(){
//		如果没有登录不能进行存储操作
		if($scope.notlogin==true){
			if(confirm("您还未登陆不能进行存储到你的个人版本操作，是否登陆？")){
				$('#login').modal();
			}
		}else{
			$scope.saveVersion=1;
			$scope.saveDescribe='';
			$scope.saveComments='';
			$scope.savesuccess=true;
			$('#save').modal();
		}
	}
	$scope.download=function download(){
        if($scope.notlogin==true){
            if(confirm("您还未登陆不能进行下载操作，是否登陆？")){
                $('#login').modal();
            }
        }else{
            var stateData={
                'directive':'changePagestate',
                'pagestate':'download'
            }
            sendMessage_funcdirective(stateData);
            $scope.edit_navActive=false;
            $scope.preview_navActive=false;
            $scope.download_navActive=true;
            $scope.save_navActive=false;
            returntofirstpage();
            setTimeout(function(){
                compressanddownload()
            },500);
        }
    }

    $scope.showCtrlFullScreen = function showCtrlFullScreen(){
        var stateData = {
            'directive': 'changePagestate',
            'pagestate': 'download'
        }
        sendMessage_funcdirective(stateData);
        $scope.edit_navActive = false;
        $scope.preview_navActive = false;
        $scope.download_navActive = false;
        $scope.save_navActive = false;
        setTimeout(function () {
            view();
        }, 500);
    }
	$scope.checkRegisterUsername=function checkRegisterUsername(){
		if($scope.registerUsername==''||typeof $scope.registerUsername=='undefined'){
			$scope.registersuccess=false;
			$scope.registerfaildinfo="用户名不能为空！";
		}else{
			$scope.registersuccess=true;
		}
	}
	$scope.checkLoginUsername=function checkLoginUsername(){
		if($scope.loginUsername==''||typeof $scope.loginUsername=='undefined'){
			$scope.loginsuccess=false;
			$scope.loginfaildinfo="用户名不能为空！";
		}else{
			$scope.loginsuccess=true;
		}
	}
	$scope.checkRegisterPassword=function checkRegisterPassword(){
		if($scope.registerPassword==''||typeof $scope.registerPassword=='undefined'){
			$scope.registersuccess=false;
			$scope.registerfaildinfo="密码不能为空！";
		}else{
			$scope.registersuccess=true;
		}
	}
	$scope.checkLoginPassword=function checkLoginPassword(){
		if($scope.loginPassword==''||typeof $scope.loginPassword=='undefined'){
			$scope.loginsuccess=false;
			$scope.loginfaildinfo="密码不能为空！";
		}else{
			$scope.loginsuccess=true;
		}
	}
	$scope.checkRegisterinputPasswordRepeat=function checkRegisterinputPasswordRepeat(){
		if($scope.registerinputPasswordRepeat==''||typeof $scope.registerinputPasswordRepeat=='undefined'){
			$scope.registersuccess=false;
			$scope.registerfaildinfo="请再次填写密码！";
		}else if($scope.registerPassword!=$scope.registerinputPasswordRepeat){
			$scope.registersuccess=false;
			$scope.registerfaildinfo="两次输入的密码不一致！";
		}else{
			$scope.registersuccess=true;
		}
	}
	$scope.register=function register(){
		var newUser={
			'username':$scope.registerUsername,
			'password':$scope.registerPassword
		}
		if($scope.registerUsername==''
			||$scope.registerPassword==''
			||$scope.registerinputPasswordRepeat==''
			||typeof $scope.registerUsername=='undefined'
			||typeof $scope.registerPassword=='undefined'
			||typeof $scope.registerinputPasswordRepeat=='undefined'){
			$scope.registersuccess=false;
			$scope.registerfaildinfo="用户名或密码不能为空！";
		}else if($scope.registerPassword!=$scope.registerinputPasswordRepeat){
			$scope.registersuccess=false;
			$scope.registerfaildinfo="两次输入的密码不一致！";
		}else{
			$http({
				      url: '/register',
				      method: "POST",
				      data: newUser
			      }).success(function(data, status, headers, config) {
				                 if(data.success){
					                 $('#register').modal('hide');
					                 alert(newUser.username+"  注册成功! 请等待管理员确认之后方可登陆~");
					                 $scope.registerUsername='';
					                 $scope.registerPassword='';
					                 $scope.registerinputPasswordRepeat='';
					                 $scope.registersuccess=true;
				                 }else{
					                 $scope.registersuccess=false;
					                 $scope.registerfaildinfo="该用户名已存在";
					                 console.log("注册失败");
				                 }
			                 }).error(function(data, status, headers, config) {
		                          $scope.registersuccess=false;
		                          alert("注册发生错误！");
	                          });
		}
	}

    //这里的ajax是到app.js中，然后又到对应的方法中去

	$scope.login=function login(){
		var loginUser={
			'username':$scope.loginUsername,
			'password':$scope.loginPassword
		}
		if($scope.loginUsername==''
			||$scope.loginPassword==''
			||typeof $scope.loginUsername=='undefined'
			||typeof $scope.loginPassword=='undefined'){
			$scope.loginsuccess=false;
			$scope.loginfaildinfo="用户名或密码不能为空！";
		}else{
			$http({
				      url: '/login',
				      method: "POST",
				      data: loginUser
			      }).success(function(data, status, headers, config) {
				                 if(data.success){
					                 $scope.user=data.user;
					                 $scope.notlogin=false;
					                 if(data.user.admin){
                                         //alert('管理员登录');
						                 $scope.manageUser=true;
					                 }
					                 $('#login').modal('hide');
					                 alert($scope.user.username+"  欢迎回来!");
					                 $scope.loginUsername='';
					                 $scope.loginPassword='';
					                 $scope.loginsuccess=true;
					                 console.log("登陆成功 用户:",data.user);
					                 storeintosession(data.user);
				                 }else if(data.err=="noconfirm"){
					                 $scope.loginsuccess=false;
					                 $scope.loginfaildinfo="管理员未确认或你的注册未被认可";
					                 console.log("登陆失败-管理员未确认或你的注册未被认可");
				                 }else{
					                 $scope.loginsuccess=false;
					                 $scope.loginfaildinfo="用户名或密码错误";
					                 console.log("登陆失败-用户名或密码错误");
				                 }
			                 }).error(function(data, status, headers, config) {
		                          $scope.loginsuccess=false;
		                          alert("登陆发生错误！");
	                          });
		}
	}
	$scope.logout=function logout(){
		if(confirm("您确认要注销该用户吗？")){
			$http({
				      url: '/logout',
				      method: "POST"
			      }).success(function(data, status, headers, config) {
	                 if(data.success){
		                 $scope.notlogin=true;
		                 $scope.manageUser=false;
		                 console.log("logout 成功");
	                 }else{
		                 alert("注销失败");
	                 }
                 }).error(function(data, status, headers, config) {
                          alert("注销失败");
                  });
		}
	}

	$scope.save=function save(){
		var body=iframeinfo.getIframeDocument().getElementsByTagName("body"),
			bodycode=body[0].innerHTML,
			versiondata={
//			用户名
			username:$scope.user.username,
//			存储上限
			limit:$scope.user.limit,
//			版本号
			version:$scope.saveVersion,
//			描述
			describe:$scope.saveDescribe,
//			备注
			comments:$scope.saveComments,
//			当前页面body中代码
			bodycode:bodycode,
//			绑定事件
			tmpbindEventList:eventDataHandle.getWholeBindEventList(),
//			默认事件
			tmpdefaultjslist:eventDataHandle.getWholeDefaultjslist(),
//			链接列表
			tmpaLabelHrefList:aLabelHrefList.getALabelHrefList()
		}
		$http({
			      url: '/saveThisVersion',
			      method: "POST",
			      data: versiondata
		      }).success(function(data, status, headers, config) {
			                 if(data.success){
				                 $('#save').modal('hide');
				                 alert("保存当前版本成功!");
				                 $scope.saveVersion=1;
				                 $scope.saveDescribe='';
				                 $scope.saveComments='';
				                 $scope.savesuccess=true;
				                 console.log("保存当前版本成功 本用户全部信息:");
			                 }else if(data.err=="limit"){
				                 $scope.savesuccess=false;
				                 $scope.savefaildinfo=data.errInfo+
					                 '你可以在"我的历史版本"中用当前版本覆盖某个版本，或先删除一个历史版本再来保存当前版本！';
			                 }else{
				                 $scope.savesuccess=false;
				                 $scope.savefaildinfo="保存当前版本失败";
			                 }
		                 }).error(function(data, status, headers, config) {
		                          $scope.savesuccess=false;
                                  $scope.savefaildinfo="保存当前版本发生错误！";
                         });
	}
	$scope.changepassword=function changepassword(){
		var currentUser={
			'username':$scope.user.username,
			'password':$scope.changepasswordPassword
		}
		if($scope.changepasswordPassword==''
			||$scope.changepasswordPasswordRepeat==''
			||typeof $scope.changepasswordPassword=='undefined'
			||typeof $scope.changepasswordPasswordRepeat=='undefined'){
			$scope.changepasswordsuccess=false;
			$scope.changepasswordfaildinfo="修改密码和确认密码不能为空！";
		}else if($scope.changepasswordPassword!=$scope.changepasswordPasswordRepeat){
			$scope.changepasswordsuccess=false;
			$scope.changepasswordfaildinfo="两次输入的密码不一致！";
		}else{
		$http({
			      url: '/changeCurrentUserPassword',
			      method: "POST",
			      data:currentUser
		      }).success(function(data, status, headers, config) {
			                 if(data.success){
				                 $('#changepassword').modal('hide');
				                 $scope.changepasswordPassword='';
				                 $scope.changepasswordPasswordRepeat='';
				                 $scope.changepasswordsuccess=true;
				                 alert("用户密码修改成功！");
				                 console.log("用户密码修改成功！");
			                 }else{
				                 alert("用户密码修改失败！");
				                 console.log("用户密码修改失败");
			                 }
		                 }).error(function(data, status, headers, config) {
			                          alert("用户密码修改发生错误！");
		                          });
		}
	}

    $scope.changePage=function changePage(){
        var num=1;

        $http({
            url: '/changepagex',
            method: "POST"
        }).success(function(data, status, headers, config) {
                if(data.success){
                    alert("aaa！");
                }else{
                    alert("666！");
                }
            }).error(function(data, status, headers, config) {
                alert("111错误！");
            });
    }

	$scope.checkMyHistoryVersion=function checkMyHistoryVersion(){
        console.log('1111111111111111');
        console.log($scope.user);
        if($scope.user == undefined){
            alert('该用户尚未注册');
            return;
        }
		var user={
			username:$scope.user.username
		}
		$http({
			      url: '/checkMyHistoryVersion',
			      method: "POST",
			      data: user
		      }).success(function(data, status, headers, config) {
			                 if(data.success){
				                 console.log("查看当前用户所有版本成功");
				                 if(data.historyVersion.length!=0){
					                 $scope.user.historyVersion=data.historyVersion;
					                 $('#myHistoryVersion').modal();
				                 }else{
					                 alert("你还没有历史版本记录哦，如想保存当前版本请点击存储~");
				                 }
			                 }else{
				                 console.log("查看当前用户所有版本失败");
			                 }
             }).error(function(data, status, headers, config) {
                  console.log("查看当前用户所有版本发生错误！");
             });
	}

	$scope.historyVersionLoadin=function historyVersionLoadin(project){
		var data = {
			'directive':'historyVersionLoadin',
			'project':project
		}
		sendMessage_funcdirective(data);
		alert("载入成功！");
		$("#myHistoryVersion").modal("hide");
	}

	$scope.historyVersionCover=function historyVersionCover(thisHistoryVersion){
		var body=iframeinfo.getIframeDocument().getElementsByTagName("body"),
			bodycode=body[0].innerHTML,
			userdata={
				//			用户名
				username:$scope.user.username,
				thisHistoryVersionId:thisHistoryVersion._id,
				updatedHistoryVersion:{
					_id:thisHistoryVersion._id,
					//			版本号
					version:parseInt(thisHistoryVersion.version)+1,
					//			更新时间
					time : new Date(),
					//			描述
					describe:thisHistoryVersion.describe,
					//			备注
					comments:thisHistoryVersion.comments,
					project:{
						//			当前页面body中代码
						bodycode:bodycode,
						//			绑定事件
						tmpbindEventList:eventDataHandle.getWholeBindEventList(),
						//			默认事件
						tmpdefaultjslist:eventDataHandle.getWholeDefaultjslist(),
						//			链接列表
						tmpaLabelHrefList:aLabelHrefList.getALabelHrefList()
					}
				}
			}
		$http({
			      url: '/historyVersionCover',
			      method: "POST",
			      data: userdata
		      }).success(function(data, status, headers, config) {
			                 if(data.success){
				                 console.log("historyVersionCover成功");
				                 $("#myHistoryVersion").modal("hide");
				                 alert("覆盖成功！");
			                 }else{
				                 $("#myHistoryVersion").modal("hide");
				                 alert("覆盖失败！");
				                 console.log("historyVersionCover失败");
			                 }
		                 }).error(function(data, status, headers, config) {
			                                  alert("覆盖时发生错误！");
			                          console.log("historyVersionCover发生错误");
                         });
	}
	$scope.historyVersionDel=function historyVersionDel(thisHistoryVersion){
		var userdata={
				username:$scope.user.username,
				thisHistoryVersionId:thisHistoryVersion._id
			}
		$http({
			      url: '/historyVersionDel',
			      method: "POST",
			      data: userdata
		      }).success(function(data, status, headers, config) {
			                 if(data.success){
				                 $("#myHistoryVersion").modal("hide");
				                 alert("删除成功！");
				                 console.log("historyVersionDel成功");
			                 }else{
				                 $("#myHistoryVersion").modal("hide");
				                 alert("删除失败！");
				                 console.log("historyVersionDel失败");
			                 }
		                 }).error(function(data, status, headers, config) {
                                  alert("删除时发生错误！");
		                          console.log("historyVersionDel发生错误");
                         });
	}


	$scope.manageAllUserData=function manageAllUserData(){
		$http({
			      url: '/getAllUserInfo',
			      method: "POST"
		      }).success(function(data, status, headers, config) {
			                 if(data.success){
				                 console.log("data.allUser  :",data.allUser);
				                 $scope.allUser=data.allUser;
                                 localStorage.user = data.allUser;
				                 //$("#manageUser").modal();
                                 var url='http://'+window.location.host+'/admin';
                                //这里使用localStorage是键值对的形式，所以需要一一对应地进行存储。
                                 //把json转换为字符串然后存储到localStorage中
                                 localStorage.setItem("admin",JSON.stringify($scope.user));
                                 //document.write(localStorage.user);这一句仅供测试
                                 console.log('localStorage.user:' + localStorage.user);
				                 console.log("获取全部用户信息成功");
                                 //可以实现页面的跳转
                                 window.location.href = url;
			                 }else{
				                 alert("获取全部用户信息失败！");
				                 console.log("获取全部用户信息失败");
			                 }
		                 }).error(function(data, status, headers, config) {
                                  alert("获取全部用户信息时发生错误！");
                         });
	}
	$scope.manageUserSaveChange=function manageUserSaveChange(thisUser){
		$http({
			      url: '/changeOneUserInfo',
			      method: "POST",
				  data:thisUser
		      }).success(function(data, status, headers, config) {
			                 if(data.success){
				                 $("#manageUser").modal('hide');
				                 alert("用户信息修改成功！");
				                 console.log("用户信息修改成功！");
			                 }else{
				                 alert("用户信息修改失败！");
				                 console.log("用户信息修改失败");
			                 }
		                 }).error(function(data, status, headers, config) {
                                  alert("用户信息修改时发生错误！");
                         });
	}
	$scope.manageUserDelUser=function manageUserDelUser(thisUser){
		if(confirm("确定要删除此用户吗?删除后将不可撤销！")){
			$http({
				      url: '/delOneUser',
				      method: "POST",
				      data:thisUser
			      }).success(function(data, status, headers, config) {
				                 if(data.success){
					                 $("#manageUser").modal('hide');
					                 alert("删除用户成功！");
					                 console.log("删除用户成功！");
				                 }else{
					                 alert("删除用户失败！");
					                 console.log("删除用户失败");
				                 }
			                 }).error(function(data, status, headers, config) {
				                          alert("删除用户时发生错误！");
			                          });
		}
	}

//    $scope.loginClick = function loginClick(){
//        $("#login").modal();
//    }
//
//    $scope.registerClick = function registerClick(){
//        $("#register").modal();
//    }
//
//    $scope.changepasswordClick = function changepasswordClick(){
//        $("#changepassword").modal();
//    }


	function storeintosession(userdata){
		$http({
			      url: '/storeintosession',
			      method: "POST",
			      data: userdata
		      }).success(function(data, status, headers, config) {
			                 if(data.success){
				                 console.log("存入session成功");
			                 }else{
				                 console.log("存入session失败");
			                 }
		                 }).error(function(data, status, headers, config) {
                              console.log("存入session发生错误");
                          });
	}

	function returntofirstpage(){
		var pagelist=iframeinfo.getIframeDocument().getElementsByTagName("div");
		var firpageid=pagelist[0].id;
		var data = {
			'toPage':firpageid,
			'directive':'changeCurPage'
		}
		sendMessage_funcdirective(data);
	}

	function compressanddownload(){
		var body=iframeinfo.getIframeDocument().getElementsByTagName("body");
		var bodycode=body[0].innerHTML;
		// var court=bodycode.split("CURRENT").length-1 ;
		// alert(court);
		var data={
			bodycode:bodycode,
			bindfunc:$scope.bindfunc,
			defaultjs:$scope.defaultjs,
            username:$scope.user.username
		}
		console.log("data  :",data);
        $http.post('/compress',data).success(successCallback).error(errorCallback);
        //成功处理
		function successCallback(data){
			console.log("压缩成功  :",data);
			var url='http://'+window.location.host+'/res.zip';
            var a;
//            a =window.open(url,"_blank", "width=0, height=0,status=0");
//            a.document.execCommand("SaveAs");
            console.log('window.location.href:' + url);
            //跳转链接实现下载
            //window.location.href = url;
            console.log('开始跳转页面');
            //通过新打开一个页面来下载
            window.open (url, 'download', 'height=400, width=400, top=0,left=0, toolbar=no,menubar=no, scrollbars=no, resizable=no,location=no, status=no')
//            window.location.href = url;
            console.log('跳转页面完成')
            //window.open(url);
            //alert("请复制以下链接以完成下载"+url);
			stateData={
				'directive':'changePagestate',
				'pagestate':'edit'
			}
			sendMessage_funcdirective(stateData);
		}
        //错误处理
        function errorCallback(res, status, headers, config){

            console.log("res");
            for(var i in res){
                console.log(i + "+" + res[i]);
            }
            console.log("status");
            for(var i in status ){
                console.log(i + "+" + status[i]);
            }
            console.log("headers");
            for(var i in headers){
                console.log(i + "+" + headers[i]);
            }
            console.log("config");
            for(var i in config){
                console.log(i + "+" + config[i]);
            }
            alert('下载失败，请重试');

        }
	}


	function uipane(state){
		var $uipane=$("#showuipane"),
			$funcpane=$("#showfuncpane"),
			$menuLeft = $( '#cbp-spmenu-s1' ),
			$menuRight = $( '#cbp-spmenu-s2' );
		var body = document.body;

		if(state == "on"){
			if($uipane.hasClass('disable')){
				$uipane.removeClass("disable");
				classie.toggle( body, 'cbp-spmenu-push-toright' );
				$menuLeft.toggleClass('cbp-spmenu-open');
			}
			if($funcpane.hasClass('disable')){
				$funcpane.removeClass("disable");
				$menuRight.toggleClass('cbp-spmenu-open' );
			}
		}else if(state == "off"){
			if(!$uipane.hasClass('disable')){
				$uipane.addClass("disable");
				classie.toggle( body, 'cbp-spmenu-push-toright' );
				$menuLeft.toggleClass('cbp-spmenu-open');
			}
			if(!$funcpane.hasClass('disable')){
				$funcpane.addClass("disable");
				$menuRight.toggleClass('cbp-spmenu-open' );
			}
		}
	}



    $scope.eventCtrlDivClick = function eventCtrlDivClick(){

        $("#warningDiv").css('display', 'block');
        $("#warningDiv").animate({opacity: '1'}, 1500, function(){
            $scope.timeout1 = setTimeout('$("#warningButton").html("确定(5)")',0);
            $scope.timeout2 = setTimeout('$("#warningButton").html("确定(4)")',1000);
            $scope.timeout3 = setTimeout('$("#warningButton").html("确定(3)")',2000);
            $scope.timeout4 = setTimeout('$("#warningButton").html("确定(2)")',3000);
            $scope.timeout5 = setTimeout('$("#warningButton").html("确定(1)")',4000);
            $scope.timeout6 = setTimeout('$("#warningButton").html("确定(0)")',5000);

            $scope.timeout7 = setTimeout('$("#warningDiv").animate({opacity: "0"},1500)',5000);

            $scope.timeout8 = setTimeout("$('#warningDiv').css('display', 'none')",6500);
        });
    }

    $scope.warningButtonHide = function warningButtonHide(){
        $('#warningButton').html('确定(5)');
        $('#warningDiv').css('opacity','0');
        $("#warningDiv").css("display", "none");
        clearTimeout($scope.timeout1);
        clearTimeout($scope.timeout2);
        clearTimeout($scope.timeout3);
        clearTimeout($scope.timeout4);
        clearTimeout($scope.timeout5);
        clearTimeout($scope.timeout6);
        clearTimeout($scope.timeout7);
        clearTimeout($scope.timeout8);


    };


    //屏幕编辑器恢复默认值
    $scope.showCtrlReset = function showCtrlReset(){
        jQuery("#mainIframe").css("height","485px");
        jQuery("#mainIframe").css("width","342px");

        jQuery("#phone").css("height","575px");
        jQuery("#phone").css("width","362px");

        jQuery("#phone-wrap").css("height","585px");
        jQuery("#phone-wrap").css("width","373px");

        jQuery("#se_ic_view137").css("height","588px");
        jQuery("#se_ic_view137").css("width","449px");

        jQuery("#showCtrlHeightInput").val($("#mainIframe").height());
        jQuery("#showCtrlWidthInput").val($("#mainIframe").width());
    };

    //屏幕编辑器使用当前设置
    $scope.showCtrlSubmit = function showCtrlSubmit(flag){
        //alert($("#showCtrlIsRealInput").is(':checked'));
        var height = parseInt(jQuery("#showCtrlHeightInput").val());
        var width = parseInt(jQuery("#showCtrlWidthInput").val());
        //这里要吧..cbp-spmenu-push的overflow换成scroll
        //然后在切换回编辑的把overflow换回去（hidden）
        if($("#showCtrlIsRealInput").is(':checked')) {
            if (height < 200 || width < 200) {
                alert('宽高请勿小于200px');
                return false;
            } else if (height > 500 || width > 1100) {
                while (height > 500 || width > 1100) {
                    height = height / 2;
                    width = width / 2;
                }
                while (height < 200 || width < 200) {
                    height = height * 2;
                    width = width * 2;
                }
                $("#showCtrlHeightInput").val(height);
                $("#showCtrlWidthInput").val(width);
            }
        }
        var height1 = height+103;
        var width1 = width + 107;
        jQuery("#se_ic_view137").css("height", height1 + 'px');
        jQuery("#se_ic_view137").css("width", width1+ 'px');

        var height2 = height + 100;
        var width2 = width + 31;
        jQuery("#phone-wrap").css("height", height2+ 'px');
        jQuery("#phone-wrap").css("width", width2+ 'px');

        var height3 = height + 90;
        var width3 = width + 20;
        jQuery("#phone").css("height", height3+ 'px');
        jQuery("#phone").css("width", width3+ 'px');

        jQuery("#mainIframe").css("height", height+ 'px');
        jQuery("#mainIframe").css("width", width+ 'px');

    };

    $scope.toggleShowCtrl = function toggleShowCtrl(){

        if($("#showCtrlDiv").hasClass('showCtrlFlag')){
            //关闭的，需要打开
            jQuery("#showCtrlDiv").animate({height:"370px"}, 1000, function(){
                $("#showCtrlDiv").removeClass('showCtrlFlag');
            });
        }else{
            //打开的，需要关闭
            jQuery("#showCtrlDiv").animate({height:"70px"}, 1000, function(){
                $("#showCtrlDiv").addClass('showCtrlFlag');
            });

        }
    };



    function view(){
        var body=iframeinfo.getIframeDocument().getElementsByTagName("body");
        var bodycode=body[0].innerHTML;
        var data={
            bodycode:bodycode,
            bindfunc:$scope.bindfunc,
            defaultjs:$scope.defaultjs
        }
        console.log("data  :",data);
        $http.post('/view',data).success(function(){
            var url='http://'+window.location.host+'/view';
            window.open (url, 'download', 'height=400, width=400, top=0,left=0, toolbar=no,menubar=no, scrollbars=no, resizable=no,location=no, status=no')
        });
    }

}]);
